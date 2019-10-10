import React from 'react'
import {getDate} from './getDate';

describe('getDate function', () => {
    it('test data', () => {
		const timestamp = 1;

		const result = getDate(timestamp);

		expect(result).toEqual("1 января, чт, 1970 год");
	});
});