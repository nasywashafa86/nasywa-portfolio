"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Navigation, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10, filter: "blur(4px)" },
    open: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col gap-2"
          >
            <MenuItem
              href="/"
              icon={<Home className="h-4 w-4" />}
              label="Home"
              number="01"
              active={pathname === "/"}
              variants={itemVariants}
            />
            <MenuItem
              href="/projects"
              icon={<Briefcase className="h-4 w-4" />}
              label="Projects"
              number="02"
              active={pathname === "/projects"}
              variants={itemVariants}
            />
            <MenuItem
              href="/journey"
              icon={<Navigation className="h-4 w-4" />}
              label="Journey"
              number="03"
              active={pathname === "/journey"}
              variants={itemVariants}
            />
            <MenuItem
              href="/contact"
              icon={<Mail className="h-4 w-4" />}
              label="Say Hello"
              active={pathname === "/contact"}
              variants={itemVariants}
              isPink
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <div className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-pink-400 border-2 border-white" />
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
        </motion.div>
      </button>
    </div>
  );
}

function MenuItem({
  href,
  icon,
  label,
  number,
  active,
  variants,
  isPink,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  number?: string;
  active?: boolean;
  variants: any;
  isPink?: boolean;
}) {
  return (
    <motion.div variants={variants}>
      <Link
        href={href}
        className={`group flex w-40 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium shadow-sm transition-all hover:scale-105 ${
          active
            ? "bg-[#111315] text-white"
            : isPink
            ? "bg-pink-50 text-pink-900 border border-pink-100 hover:bg-pink-100"
            : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
        }`}
      >
      <div className="flex items-center gap-3">
        {number && (
          <span
            className={`font-mono text-xs ${
              active ? "text-gray-400" : "text-gray-400"
            }`}
          >
            {number}
          </span>
        )}
        {label}
      </div>
      <div
        className={`${
          active ? "text-gray-400" : isPink ? "text-pink-400" : "text-gray-400 group-hover:text-gray-600"
        } transition-colors`}
      >
        {icon}
      </div>
      </Link>
    </motion.div>
  );
}
