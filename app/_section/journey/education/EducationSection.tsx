// Compoent
import TimelineElement from "@/app/_component/TimelineElement";

// Icon
import { MdOutlineSchool } from "react-icons/md";

// Education
const education = [
  {
    start: "2017/04",
    end: "2021/03",
    title: "佛教大学  教育学部",
    des: "4年間教育学について学びました。結果として教員の道は選びませんでしたが、教育学や心理学について学びました。",
  },
  {
    start: "2021/09",
    end: "2022/09",
    title: "Tamwood  Web Development",
    des: "バンクーバー(カナダ)の専門学校でWeb開発について学びました。主にフロントエンド(HTML、CSS、JS等)を学習しましたが、PHP、MySQLなどのバックエンドに加え、VScodeやGithubも学びました。プログラム内容は6カ月間の学習期間と6カ月間のインターンシップでした。実際の現場で学習期間に学んだことを生かすことや、授業と実務の大きな違いなど多くのことを学ぶことができました。",
  },
];
const EducationSection = () => {
  return (
    <div className="w-full">
      {education.map((element, idx) => {
        return (
          <TimelineElement
            key={idx}
            odd={(idx + 1) % 2 === 0 ? true : false}
            element={element}
            Icon={MdOutlineSchool}
            type="education"
          />
        );
      })}
    </div>
  );
};

export default EducationSection;