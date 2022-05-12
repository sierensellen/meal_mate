import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Button, CardList, Icon } from '@shared/components';
import { Sidebar } from '@shared/components/Sidebar';
import { SortValue } from '@shared/types';
import { HomeProps } from '@shared/types/Home.types';

import { MealFilter } from '@meals/types';
import { findFilter } from '@meals/utils';
import { useGetMeals } from 'hooks/get-meals';

const Home: NextPage<HomeProps> = () => {
	/**
	 * hooks
	 */
	const [sort, setSort] = useState({
		value: 'price',
		order: 0,
	});

	const [currentFilters, setCurrentFilters] = useState<MealFilter[]>([
		findFilter('price', 0),
		findFilter('time', 0),
		findFilter('washing', 0),
	]);
	console.log(currentFilters);

	const { data: meals } = useGetMeals(sort.order, sort.value as SortValue);

	/**
	 * effects
	 */

	useEffect(() => {
		const idleFilter = currentFilters.map((item) => {
			if (item.value === sort.value) {
				item = findFilter(item.value, sort.order);
			} else {
				item = findFilter(item.value, 0);
			}
			return item;
		});
		setCurrentFilters(idleFilter);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sort]);

	/**
	 * mapping
	 */

	// console.log('mealcards', mealCards)

	/**
	 * render
	 */

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="container">
				<Sidebar>
					{currentFilters.map((filter) => {
						return (
							<Button
								key={filter.value}
								icon={<Icon name={filter.img} big={true} />}
								big={true}
								active={
									sort.value === filter.value && sort.order !== 0 ? true : false
								}
								onClick={() => {
									if (sort.value === filter.value) {
										// pressed active button
										let newOrder = -1;
										if (sort.order < 1) {
											newOrder = sort.order + 1;
										}
										setSort({
											value: filter.value,
											order: newOrder, // start with ascending
										});
										console.log(filter.value, newOrder);
									} else {
										// pressed different button
										setSort({
											value: filter.value,
											order: 1, // start with ascending
										});
									}
								}}
							/>
						);
					})}
				</Sidebar>
				<div className="content_with_sidebar">
					{meals && <CardList className="cardlist" cards={meals} />}
				</div>
			</main>
		</div>
	);
};

export default Home;
