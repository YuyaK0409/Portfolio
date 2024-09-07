"use client";
// Compoent
import TimelineElement from "@/app/_component/TimelineElement";
// Icon
import { MdWorkOutline } from "react-icons/md";

// Experience
const experience = [
  {
    start: "2023/1",
    end: "2023/10",
    title: "建築業者の案件管理システム",
    des: "大元の建設業者から他業者に案件を振り分けるシステムの開発に携わりました。案件管理、支払請求、発注等の管理が出来るシステムです。私はユーザー管理の機能、請求書発行機能、銀行・会計CSVの発行機構、外部連携API実装など多岐にわたり、かかわることが出来ました。",
    skills: ["Laravel", "Jquery", "MySql"],
  },
  {
    start: "2023/12",
    end: "現在",
    title: "保険会社のシステム",
    des: "保険会社システムの監視に携わりました。バッチの管理、エラー対応を中心に業務を行っていました。加えて、業務の効率化を図るためツールを作成しました。本番のログ取得やレコード取得を誰でも実行可能にする機能等を作成しました。",
    skills: ["C#", "Visual Studio", "ETLツール", "Control-M", "Oracle SQL"],
  },
];
const Experience = () => {
  return (
    <div className="w-full">
      {experience.map((element, idx) => {
        return (
          <TimelineElement
            key={idx}
            odd={(idx + 1) % 2 === 0 ? true : false}
            Icon={MdWorkOutline}
            type="experience"
            element={element}
          />
        );
      })}
    </div>
  );
};

export default Experience;
