import React from "react";
import dynamic from "next/dynamic";

const LeadScoreRunner = dynamic(() => import("../../components/LeadScoreRunner"), { ssr: false });

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Lead Score Tool Runner</h1>
      <LeadScoreRunner />
    </main>
  );
}
