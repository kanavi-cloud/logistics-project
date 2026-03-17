# 📦 Logistics 3D Loader

우체국 화물 적재 효율화를 위한 3D 시각화 및 최적 적재 알고리즘 프로젝트입니다.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript
- **3D Engine**: Three.js, React Three Fiber (R3F), Drei
- **Styling**: Tailwind CSS
- **State Management**: Zustand (예정)

## 📁 Folder Structure

실무 패턴인 `src` 기반 구조를 따릅니다.

- `@/components/canvas`: 3D 객체(트럭, 박스 등) 관련 컴포넌트
- `@/components/common`: 공통 UI 요소
- `@/hooks`: 커스텀 훅 (애니메이션, 데이터 로딩 등)
- `@/lib`: 외부 라이브러리 설정 및 유틸 함수
- `@/store`: 전역 상태 관리 (박스 위치 정보 등)
- `@/types`: TypeScript 인터페이스 정의

## 🚀 Getting Started

1. 저장소 클론:
   `git clone https://github.com/kanavi-cloud/logistics-project.git`

2. 의존성 설치:
   `npm install`

3. 개발 서버 실행:
   `npm run dev`
