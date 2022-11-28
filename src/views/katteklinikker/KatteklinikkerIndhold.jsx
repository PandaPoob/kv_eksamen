import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";

export default function KatteklinikkerIndhold({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
    </PageLayout>
  );
}
