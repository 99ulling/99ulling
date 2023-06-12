import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

import {
  AppCompleted,
  LocationLevel,
  MyPage,
  NotFound,
  ReservationConfirm,
  Sharing,
  SharingRequest,
  UserConfirm,
} from "@/activities";

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
      appBar: {
        minHeight: "100vh",
      },
    }),
    historySyncPlugin({
      routes: {
        Sharing: "/",
        LocationLevel: "/location-level",
        UserConfirm: "/user-confirm",
        SharingRequest: "/sharing-request",
        AppCompleted: "/app-completed",
        ReservationConfirm: "/reservation-confirm",
        MyPage: "/mypage",
        NotFound: "/404",
      },
      fallbackActivity: () => "NotFound",
    }),
  ],
  activities: {
    AppCompleted,
    LocationLevel,
    MyPage,
    NotFound,
    ReservationConfirm,
    Sharing,
    SharingRequest,
    UserConfirm,
  },
  initialActivity: () => "Sharing",
});

export type TypeActivities = typeof activities;
