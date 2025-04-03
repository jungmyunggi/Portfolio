import Award from '@/features/Awards/ui/Award';
export default function AwardDesktop() {
    return (
        <section className="award">
            <Award src="scholarship" text="성적우수, 도전학기, 지방대학활성화사업 등 장학 수혜" />
            <Award
                src="llm"
                text="한국정보통신학회 2024 춘계 학술대회 프롬프트 엔지니어링과 LLM ... 논문 투고 및 수상"
            />
        </section>
    );
}
