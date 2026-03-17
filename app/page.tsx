"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Stage, Box } from "@react-three/drei";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-900">
      {/* 상단 제목 바 */}
      <div className="absolute top-0 left-0 z-10 p-6 text-white">
        <h1 className="text-2xl font-bold">Logistics 3D Loader</h1>
        <p className="text-sm opacity-70">
          기획안 Ver 2.0 - 적재 알고리즘 시각화
        </p>
      </div>

      {/* 3D 캔버스 영역 */}
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <color attach="background" args={["#111827"]} />

        <Stage intensity={0.5} environment="city" shadows={false}>
          {/* 적재함 바닥 가이드 (10x10 크기) */}
          <Grid
            renderOrder={-1}
            position={[0, -0.01, 0]}
            infiniteGrid
            cellSize={0.5}
            sectionSize={2.5}
            sectionThickness={1.5}
            sectionColor="#3b82f6"
          />

          {/* 테스트용 박스 (기획서의 S사이즈 샘플이라 생각해보세요!) */}
          <Box position={[0, 0.5, 0]} args={[1, 1, 1]}>
            <meshStandardMaterial color="#fb923c" />
          </Box>
        </Stage>

        {/* 마우스로 화면을 돌려볼 수 있게 해주는 컨트롤러 */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
