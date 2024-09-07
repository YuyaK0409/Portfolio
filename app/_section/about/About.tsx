import { getAge } from "@/utils";

const About = () => {
  const age = getAge(1998);
  return (
    <div className="w-full">
      <p>初めまして、河本祐哉と申します。</p>
      <p>大阪在住の{age}歳、システムエンジニアです。</p>
      <p>SESとして様々な案件に携わり、日々精進しています。</p>
      <p>
        過去に参画した案件では、Laravel、Java、C#を使い、バックエンドの開発に携わり、
      </p>
      <p>個人学習ではNextjsを使ったWEB開発を学んでおり、</p>
      <p>フルスタックエンジニアへの道を歩んでおります。</p>
    </div>
  );
};

export default About;
