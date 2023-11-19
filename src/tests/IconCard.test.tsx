import { expect, test } from 'vitest'
import { isHorizontal, Orientation } from '../components/IconCard'

test('should determine if Orientation enum value is horizontal or vertical',
    () => {
        expect(isHorizontal(Orientation.north)).toBe(false)
        expect(isHorizontal(Orientation.south)).toBe(false)
        expect(isHorizontal(Orientation.east)).toBe(true)
        expect(isHorizontal(Orientation.west)).toBe(true)
    })