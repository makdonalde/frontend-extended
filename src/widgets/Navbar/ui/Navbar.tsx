import { Link } from "react-router-dom";
import { AppRoutes } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";
interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher className= />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.MAIN}>
          Main
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={AppRoutes.ABOUT}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};
