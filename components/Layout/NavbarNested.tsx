import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
// import { UserButton } from '../UserButton/UserButton';
// import { Logo } from './Logo';
import classes from "./NavbarNested.module.css";
import { LinksGroup } from "./NavbarLinkGroup";
import { UserButton } from "./UserButton";

const mockdata = [
  { label: "Dashboard", icon: IconGauge, primaryItemLink: "/" },
  {
    label: "Market news",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics, primaryItemLink: "/Analytics" },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

export function NavbarNested({ toggleMobile }: any) {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} toggleMobile={toggleMobile} />);

  return (
    <nav className={`grid h-full grid-rows-[auto,1fr,auto] p-2`}>
      <div className="border-b pb-2">
        <Group justify="space-between">
          {/* <Logo style={{ width: rem(120) }} /> */}
          {/* <Code fw={700}>v3.1.2</Code> */}
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
