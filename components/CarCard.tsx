"use client";

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import { CustomButton } from ".";
interface CardCarProps {
  car: CarProps;
}
const CarCard = ({ car }: CardCarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return <div className="car-card group"></div>;
};

export default CarCard;
