import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass')
	})

	test('with additional param', () => {
		expect(classNames('someClass', ['someClass2', 'someClass3'])).toBe('someClass someClass2 someClass3')
	})

	test('with mods param', () => {
		expect(classNames('someClass', [], { 'someClass2': true, 'someClass3': false })).toBe('someClass someClass2')
	})
})