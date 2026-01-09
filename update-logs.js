// update-logs.js

// 目前的版本號
export const currentVersion = "1.1.0"; 

// 更新日誌 (最新的放最上面)
export const updateLogs = [
    {
        version: "1.1.0",
        date: "2026-01-09",
        title: "介面與功能大升級",
        content: [
            "新增「存入日期」欄位，方便管理無期限食材。",
            "新增左側選單與設定頁面。",
            "新增深淺色模式切換。",
            "新增版本更新通知開關。"
        ]
    },
    {
        version: "1.0.0",
        date: "2026-1-08",
        title: "正式上線",
        content: [
            "冰箱庫存管理基礎功能。",
            "拍照上傳與到期日提醒。",
            "家庭即時同步功能。"
        ]
    }
];
