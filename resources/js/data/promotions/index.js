export const promotionsTableColumns = [
    {
        field: "vip",
        headerName: "VIP",
        type: "text",
        width: "50%",
        sortable: "false",
        flex: 1,
        cellClassName: "vip-column--cell",
    },
    {
        field: "amount",
        headerName: "R $",
        type: "text",
        sortable: false,
        width: "50%",
        flex: 1,
        cellClassName: "amount-column--cell",
    },
];

export const promotionsTableRows = [
    { id: 1, amount: "R$ 5", vip: "VIPO-VIP 1" },
    { id: 2, amount: "R$ 10", vip: "VIPO-VIP 2" },
    { id: 3, amount: "R$ 20", vip: "VIPO-VIP 3" },
    { id: 4, amount: "R$ 50", vip: "VIPO-VIP 4" },
    { id: 5, amount: "R$ 100", vip: "VIPO-VIP 5" },
    { id: 6, amount: "R$ 200", vip: "VIPO-VIP 6" },
    { id: 7, amount: "R$ 500", vip: "VIPO-VIP 7" },
    { id: 8, amount: "R$ 1000", vip: "VIPO-VIP 8" },
    { id: 9, amount: "R$ 2000", vip: "VIPO-VIP 9" },
    { id: 10, amount: "R$ 5000", vip: "VIPO-VIP 10" },
];

export const activeUsersColumns = [
    {
        field: "active_users",
        headerName: "Active Users",
        type: "text",
        width: "50%",
        sortable: "false",
        flex: 1,
        cellClassName: "vip-column--cell",
    },
    {
        field: "achievement_bonus",
        headerName: "Achievement Bonus",
        type: "text",
        sortable: false,
        width: "50%",
        flex: 1,
        cellClassName: "amount-column--cell",
    },
];

export const activeUsersRows = [
    { id: 1, active_users: 5, achievement_bonus: "R$ 5" },
    { id: 2, active_users: 20, achievement_bonus: "R$ 10" },
    { id: 3, active_users: 100, achievement_bonus: "R$ 20" },
    { id: 4, active_users: 500, achievement_bonus: "R$ 50" },
    { id: 5, active_users: 1000, achievement_bonus: "R$ 100" },
    { id: 6, active_users: 5000, achievement_bonus: "R$ 200" },
    { id: 7, active_users: 50000, achievement_bonus: "R$ 500" },
];
