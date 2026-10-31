/**
 * AAC Block Calculator
 * Standard RBF block face: 600mm (L) x 200mm (H)
 * Wastage factor: 5% (common site allowance)
 */

export const BLOCK_SIZES = {
  100: { label: '4" (100mm)' },
  125: { label: '5" (125mm)' },
  150: { label: '6" (150mm)' },
  200: { label: '8" (200mm)' },
  225: { label: '9" (225mm)' },
  250: { label: '10" (250mm)' },
}

// 1 AAC block replaces approx. this many red bricks, per RBF size chart
export const BRICK_EQUIVALENT = {
  100: 6,
  125: 8,
  150: 10,
  200: 12,
  225: 14,
  250: 16,
}

// Approximate blocks per cubic metre, per RBF size chart
export const BLOCKS_PER_CBM = {
  100: 83,
  125: 66,
  150: 55,
  200: 41,
  225: 37,
  250: 33,
}

export function calculateBlocks({ length, height, thickness, unit = 'm', openings = 0 }) {
  const factor = unit === 'ft' ? 0.3048 : 1
  const lengthM = parseFloat(length) * factor
  const heightM = parseFloat(height) * factor

  if (!lengthM || !heightM || lengthM <= 0 || heightM <= 0) {
    return null
  }

  const wallArea = lengthM * heightM
  // openings are entered in the same unit system as the wall (m2 or ft2)
  const openingsArea = (parseFloat(openings) || 0) * (unit === 'ft' ? 0.09290304 : 1)
  const netArea = Math.max(0, wallArea - openingsArea)

  // Block face area = 600mm x 200mm = 0.12 m²
  const blockFaceArea = 0.6 * 0.2
  const blocksRaw = netArea / blockFaceArea
  const totalBlocks = Math.ceil(blocksRaw * 1.05)

  const thicknessM = parseInt(thickness, 10) / 1000
  const volumeCBM = netArea * thicknessM

  return {
    wallArea: wallArea.toFixed(2),
    netArea: netArea.toFixed(2),
    totalBlocks,
    volumeCBM: volumeCBM.toFixed(2),
    blocksPerCBM: BLOCKS_PER_CBM[thickness],
  }
}
