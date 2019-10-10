import React from 'react'
import {sortByItemCount, sortByDate, sortByItemNames, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('More last', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
	it('Not objects', () => {
		const result = sortByItemCount(1, 3);
		expect(result).toBe(0);
	});

	it('Less last', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});
	it('One of undefined', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: undefined,
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

});

describe('sortByDate function', () => {
	it('same date', () => {
		const order1 = {
			date: 5,
		};

		const order2 = {
			date: 5,
		};
		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});
	it('Second less', () => {
		const order1 = {
			date: 5,
		};

		const order2 = {
			date: 7,
		};
		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	});

	it('Second more', () => {
		const order1 = {
			date: 7,
		};

		const order2 = {
			date: 5,
		};
		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
	});

	it('Not objects', () => {
		const result = sortByDate(1, 2);
		expect(result).toBe(0);
	});

	it('Underfined objects', () => {
		const result = sortByDate({data: undefined}, {data: undefined});
		expect(result).toBe(0);
	});
	it('Empty objects', () => {
		const result = sortByDate(null, null);
		expect(result).toBe(0);
	});
});

describe('sortByItemNames function', () => {
	it('Same names', () => {
		const order1 = {
			items: ["aaa"],
		};

		const order2 = {
			items: ["bbb"],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('Same names', () => {
		const order1 = {
			items: ["bbb"],
		};

		const order2 = {
			items: ["bbb"],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('Same names', () => {
		const order1 = {
			items: ["bbb"],
		};

		const order2 = {
			items: ["aaa"],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});

	it('Underfined objects', () => {
		const result = sortByItemNames({data: undefined}, {data: undefined});
		expect(result).toBe(0);
	});
	it('Empty objects', () => {
		const result = sortByItemNames(null, null);
		expect(result).toBe(0);
	});
	it('Not objects', () => {
		const result = sortByItemNames(0, 0);
		expect(result).toBe(0);
	});

});

describe('sortOrders function', () => {
	it('Not objects', () => {
		const result = sortOrders(0, 0);
		expect(result).toBe(undefined);
	});
});



