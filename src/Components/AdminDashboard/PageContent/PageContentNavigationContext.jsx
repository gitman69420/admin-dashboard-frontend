import { useState, createContext } from "react";

export const NavigationContext = createContext();
export const NavigationContextModifier = createContext();

// headings for the navbar
export const NavList = [
  "Event Settings",
  "Engage and Network",
  "Event Marketing",
  "Tickets",
  "Attendees",
  "Event Contest",
  "Publish",
];

// tabs under each navbar heading
export const NavListSubheadings = [
  [
    { titleName: "General", disabled: false },
    { titleName: "Privacy", disabled: false },
    { titleName: "Features", disabled: false },
    { titleName: "Customization", disabled: false },
    { titleName: "Integration", disabled: false },
    { titleName: "Session Settings", disabled: true },
    { titleName: "My plans", disabled: false },
  ],
  [{ titleName: "General", disabled: false }],
  [{ titleName: "General", disabled: false }],
  [{ titleName: "General", disabled: false }],
  [{ titleName: "General", disabled: false }],
  [
    { titleName: "Basics", disabled: false },
    { titleName: "Branding", disabled: false },
    { titleName: "Agenda", disabled: false },
    { titleName: "Virtual/Hybrid Center", disabled: false },
    { titleName: "Speaker Center", disabled: false },
    { titleName: "Sponsor Center", disabled: false },
  ],
  [{ titleName: "General", disabled: false }],
];

const PageContentNavigationContext = (props) => {
  const [nav, setNav] = useState(0);

  return (
    <>
      <NavigationContext.Provider value={nav}>
        <NavigationContextModifier.Provider value={setNav}>
          {props.children}
        </NavigationContextModifier.Provider>
      </NavigationContext.Provider>
    </>
  );
};

export default PageContentNavigationContext;
