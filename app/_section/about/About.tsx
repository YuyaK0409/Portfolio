import { getAge } from "@/utils";

const About = () => {
  const age = getAge(1998);
  return (
    <div className="flex-1">
      <p>初めまして、河本祐哉と申します。</p>
      <p>大阪在住の{age}歳、フルスタックエンジニアです。</p>
      <p>SESとして様々な案件に携わり、日々精進しています。</p>
      <p>
        過去に参画した案件では、PHPやJavaを使い、バックエンドの開発に携わり、
      </p>
      <p>
        個人学習ではNextjsを使ったWEB開発を学んでおり、フルスタックエンジニアへの道を歩んでおります。
      </p>
    </div>
  );
};

export default About;
