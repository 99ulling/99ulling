package com.ggulling.config.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;
import springfox.bean.validators.configuration.BeanValidatorPluginsConfiguration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.ResponseBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Response;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.DocExpansion;
import springfox.documentation.swagger.web.UiConfiguration;
import springfox.documentation.swagger.web.UiConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static springfox.documentation.builders.RequestHandlerSelectors.withClassAnnotation;

@EnableSwagger2
@Configuration
@Import(BeanValidatorPluginsConfiguration.class)
public class SwaggerConfig {
    private static final String API_NAME = "99ulling Project API";
    private static final String API_VERSION = "0.0.1";
    private static final String API_DESCRIPTION = "99ulling project";

    @Bean
    public UiConfiguration uiConfig() {
        return UiConfigurationBuilder.builder()
                .docExpansion(DocExpansion.LIST)
                .build();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
//                .securitySchemes(authorization())
                .ignoredParameterTypes()
                .select()
                .apis(withClassAnnotation(RestController.class))
                .paths(PathSelectors.ant("/**"))
                .build()
                .useDefaultResponseMessages(false)
                .globalResponses(HttpMethod.GET, this.createGlobalResponseMessages())
                .globalResponses(HttpMethod.POST, this.createGlobalResponseMessages())
                .globalResponses(HttpMethod.PUT, this.createGlobalResponseMessages())
                .globalResponses(HttpMethod.DELETE, this.createGlobalResponseMessages());
    }

    private List<Response> createGlobalResponseMessages() {
        return Stream.of(
                        HttpStatus.BAD_REQUEST,
                        HttpStatus.UNAUTHORIZED,
                        HttpStatus.CONFLICT,
                        HttpStatus.FORBIDDEN,
                        HttpStatus.NOT_FOUND,
                        HttpStatus.INTERNAL_SERVER_ERROR,
                        HttpStatus.BAD_GATEWAY,
                        HttpStatus.SERVICE_UNAVAILABLE
                )
                .map(this::createResponseMessage)
                .collect(Collectors.toList());
    }

    private Response createResponseMessage(HttpStatus httpStatus) {
        return new ResponseBuilder()
                .code(String.valueOf(httpStatus.value()))
                .description(httpStatus.getReasonPhrase())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(API_NAME)
                .version(API_VERSION)
                .description(API_DESCRIPTION)
                .contact(new Contact("Sol Lee", "https://www.github.com/soleu", "dlthf555@gmail.com"))
                .build();
    }

//    private List<SecurityScheme> authorization() {
//        return List.of(new ApiKey("Authorization", "Authorization", "header"));
//    }

}
