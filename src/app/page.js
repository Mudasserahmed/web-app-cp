/* eslint-disable react/jsx-no-target-blank */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
     router.replace("/pages/login");
  }, []);

  return (
    <>
      <div />
    </>
  );
}
