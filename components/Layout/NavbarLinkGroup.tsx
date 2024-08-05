"use client";

import { useState } from "react";
import { Group, Box, Collapse, ThemeIcon, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  console.log(label);
  //
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <a
      className="block w-11/12 border-l-2 py-1 text-center hover:bg-gray-100"
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <button onClick={() => setOpened((o) => !o)} className={`${classes.control} px-4 py-2`}>
        {/* <div className="grid grid-cols-4 w-full"> */}
        <div className="grid min-w-full grid-cols-[auto,1fr,20px] items-center">
          <ThemeIcon variant="light" size={30} className="">
            <Icon style={{ width: rem(18), height: rem(18) }} />
          </ThemeIcon>
          <Box ml="md" className="">
            {label}
          </Box>
          {hasLinks && (
            <IconChevronRight
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
