"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutContent, personalInfo } from "@/data/portfolio";

export default function ProfilePhoto() {
  return (
    <motion.div
      className="flex w-full flex-col items-center lg:items-start"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="group relative h-[260px] w-[260px] overflow-hidden rounded-3xl border border-gray-200 shadow-lg sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]"
      >
        <Image
          src={aboutContent.profileImage}
          alt={`${personalInfo.name} - Professional portrait`}
          fill
          priority
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>

      <div className="mt-6 w-full text-center lg:text-left">
        <p className="text-base font-semibold text-foreground">
          {personalInfo.name}
        </p>
        <div className="mt-2 space-y-1">
          {aboutContent.roles.map((role) => (
            <p key={role} className="text-sm text-muted">
              {role}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
