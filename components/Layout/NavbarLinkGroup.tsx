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
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <button onClick={() => setOpened((o) => !o)} className={`${classes.control} px-4 py-2`}>
        {/* <div className="grid grid-cols-4 w-full"> */}
        <div className="grid w-full grid-rows-[auto,1fr,auto]">
          <Box className="col-span-3 grid grid-cols-4">
            <ThemeIcon variant="light" size={30} className="col-span-1">
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={`${classes.chevron} col-span-1 bg-red-300`}
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
