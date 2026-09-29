'use client';

import { HeroMeshGrid } from '../HeroMeshGrid';

export function StatusQuoMeshVisual() {
  return (
    <HeroMeshGrid
      variant="embed"
      showPhaseLabel={false}
      showDiscoveryScales={false}
      className="w-full"
    />
  );
}
