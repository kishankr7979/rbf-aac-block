/**
 * AAC Block Calculator
 * Standard block size: 600mm (L) x 200mm (H) x thickness (W)
 * Wastage factor: 5% (standard industry)
 */

export const BLOCK_SIZES = {
  75:  { label: '75mm',  weight: 7.5,  description: 'Ultra-light partition walls' },
  100: { label: '100mm', weight: 9.5,  description: 'Interior & partition walls' },
  150: { label: '150mm', weight: 14.0, description: 'External & load bearing walls' },
  200: { label: '200mm', weight: 18.5, description: 'Heavy-duty structural walls' },
}

// Blocks per cubic meter for each thickness
export const BLOCKS_PER_CBM = {
  75:  Math.round(1 / (0.6 * 0.2 * 0.075)),   // ~111
  100: Math.round(1 / (0.6 * 0.2 * 0.100)),   // ~83
  150: Math.round(1 / (0.6 * 0.2 * 0.150)),   // ~55
  200: Math.round(1 / (0.6 * 0.2 * 0.200)),   // ~41
}

export function calculateBlocks({ length, height, thickness, unit = 'm', openings = 0 }) {
  // Convert to meters if in feet
  const factor = unit === 'ft' ? 0.3048 : 1
  const lengthM = parseFloat(length) * factor
  const heightM = parseFloat(height) * factor

  if (!lengthM || !heightM || lengthM <= 0 || heightM <= 0) {
    return null
  }

  const wallArea = lengthM * heightM
  const openingsArea = parseFloat(openings) || 0
  const netArea = Math.max(0, wallArea - openingsArea)
  
  // Each block face area = 600mm x 200mm = 0.12 m²
  const blockFaceArea = 0.6 * 0.2
  const blocksRaw = netArea / blockFaceArea
  const wastage = 0.05 // 5%
  const totalBlocks = Math.ceil(blocksRaw * (1 + wastage))

  const thicknessM = parseInt(thickness) / 1000
  const volumeCBM = netArea * thicknessM

  const weightPerBlock = BLOCK_SIZES[thickness]?.weight || 9.5
  const totalWeight = totalBlocks * weightPerBlock // kg
  
  // Mortar: approximately 0.015 m³ of mortar per m² of wall (thin bed mortar)
  const mortarBags = Math.ceil(netArea * 0.3) // approx 0.3 bags per m²

  return {
    wallArea: wallArea.toFixed(2),
    netArea: netArea.toFixed(2),
    totalBlocks,
    volumeCBM: volumeCBM.toFixed(2),
    totalWeightKg: Math.round(totalWeight),
    totalWeightTons: (totalWeight / 1000).toFixed(2),
    mortarBags,
    blocksPerCBM: BLOCKS_PER_CBM[thickness],
  }
}
