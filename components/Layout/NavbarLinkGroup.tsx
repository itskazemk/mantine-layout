"use client";

import { useState } from "react";
import { Group, Box, Collapse, ThemeIcon, Text, rem, Button } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";
import Link from "next/link";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  primaryItemLink?: string;
  toggleMobile: any;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  primaryItemLink,
  toggleMobile,
}: LinksGroupProps) {
  console.log(label);
  //
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link
      className="block w-11/12 border-l-2 py-1 text-center hover:bg-gray-100"
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <button onClick={() => setOpened((o) => !o)} className={`${classes.control} px-4 py-2`}>
        {/* <div className="grid grid-cols-4 w-full"> */}
        <div className="grid min-w-full grid-cols-[auto,1fr,20px] items-center">
          <ThemeIcon variant="light" size={30} className="">
            <Icon style={{ width: rem(18), height: rem(18) }} />
          </ThemeIcon>
          {hasLinks ? (
            <Box ml="md" className="">
              {label}
            </Box>
          ) : (
            <Button component={Link} onClick={toggleMobile} href={primaryItemLink ?? "/"}>
              {label}
            </Button>
          )}
          {hasLinks && (
            <IconChevronRight
              onClick={toggleMobile}
              className={`${classes.chevron} `}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </div>
      </button>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
