import { createSelector } from "@reduxjs/toolkit";
import { getUserdata } from "entities/User";
import { SidebarItemType } from "../types/SidebarItemType";
import { routePath } from "app/providers/AppRouter/lib/routeConfig";
import MainPageActiveIcon from 'shared/assets/MainIconActive.svg'
import MainPageIcon from 'shared/assets/MainIcon.svg'
import ProfilePageActiveIcon from 'shared/assets/ProfileIconActive.svg'
import ProfilePageIcon from 'shared/assets/ProfileIcon.svg'

export const getSidebarItems = createSelector(
    getUserdata,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: routePath.main,
                activeIcon: MainPageActiveIcon,
                icon: MainPageIcon,
                label: 'Main',
            },
            
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: routePath.profile,
                    activeIcon: ProfilePageActiveIcon,
                    icon: ProfilePageIcon,
                    label: 'Profile',
                },
            );
        }

        return sidebarItemsList;
    },
);