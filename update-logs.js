// update-logs.js
// 這裡只放「最新版本號」與「更新紀錄」
// 之後每次發新版本，你只要改 LATEST_VERSION 並在 UPDATE_LOGS 最上面新增一筆即可

export const LATEST_VERSION = "1.1.0";

export const UPDATE_LOGS = [
  {
    version: "1.1.0",
    date: "2026-01-09",
    title: "新增設定頁、版本更新通知、存入日期與無期限",
    changes: [
      "新增左側邊欄，底部加入設定按鈕",
      "新增全螢幕設定頁（非彈窗）",
      "新增版本更新通知藥丸開關，可控制是否進入 App 彈出更新資訊",
      "新增版本資訊與更新內容列表",
      "新增物品存入日期欄位",
      "到期日改為可不填，支援無期限物品"
    ]
  },
  {
    version: "1.0.0",
    date: "2026-01-08",
    title: "初版",
    changes: [
      "新增物品、拍照、到期提醒、刪除"
    ]
  }
];
