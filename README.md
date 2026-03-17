# 📦 Logistics 3D Loader

우체국 화물 적재 효율화를 위한 3D 시각화 및 최적 적재 알고리즘 프로젝트입니다.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript
- **3D Engine**: Three.js, React Three Fiber (R3F), Drei
- **Styling**: Tailwind CSS
- **State Management**: Zustand (예정)

- R3F(React Three Fiber) - Three.js를 리액트 문법으로 쓸 수 있게 함
- Drei - R3F 개발팀이 만든 공식 유틸리티 라이브러리 (3D 개발에 유용한 도구)
## 📁 Folder Structure

## 📁 폴더 구조 가이드 (Folder Structure)

우리 프로젝트는 **관심사 분리**와 **유지보수**를 위해 아래와 같은 폴더 규칙을 사용합니다. 모든 경로는 `@/` (src/) 절대 경로를 사용해 주세요.

### 1. `@/components` (컴포넌트)
- **`canvas/`**: Three.js와 R3F 전용 3D 객체들을 모아둡니다.
- **`common/`**: 일반적인 웹 UI 요소들을 모아둡니다.

### 2. `@/hooks` (커스텀 훅)
- **로직 재사용성**을 위한 폴더입니다. 컴포넌트 내의 복잡한 로직을 분리합니다.

### 3. `@/lib` (외부 라이브러리 & 설정)
- **외부 모듈의 설정**이나 프로젝트 전반에서 쓰이는 **핵심 유틸**을 정의합니다.

### 4. `@/store` (상태 관리)
- **전역 데이터**를 관리합니다. (Zustand 사용 권장)

### 5. `@/types` (타입 정의)
- **TypeScript 타입 및 인터페이스** 정의 파일들입니다. (.ts)

### 6. `@/utils` (공통 유틸리티)
- 특정 라이브러리에 의존하지 않는 **순수 자바스크립트 함수**를 모아둡니다.

## 🚀 Getting Started

1. 저장소 클론:
   `git clone https://github.com/kanavi-cloud/logistics-project.git`

2. 의존성 설치:
   `npm install`

3. 개발 서버 실행:
   `npm run dev`
