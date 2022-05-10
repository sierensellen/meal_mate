import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import { Button, CardList, Icon, Icons } from '@shared/components';
import { Sidebar } from '@shared/components/Sidebar';
import { SortValue } from '@shared/types';
import { HomeProps } from '@shared/types/Home.types';

import { useGetMeals } from 'hooks/get-meals';

const Home: NextPage<HomeProps> = () => {
	/**
	 * hooks
	 */
	const [sort, setSort] = useState({
		value: 'price',
		order: 0,
	});

	const { data: meals } = useGetMeals(sort.order, sort.value as SortValue);

	/**
	 * effects
	 */

	// useEffect(() => {
	// 	meals && setMappedMeals(mapMeals(meals));
	// }, [meals]);

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
					{['price', 'time', 'washing'].map((value) => {
						let iconValue = undefined;
						switch (value) {
							case 'price':
								iconValue = <Icon big={true} name={Icons.price_up_down} />;
								if (value === sort.value) {
									switch (sort.order) {
										case 0:
											iconValue = (
												<Icon big={true} name={Icons.price_up_down} />
											);
											break;
										case 1:
											iconValue = <Icon big={true} name={Icons.price_up} />;
											break;
										case -1:
											iconValue = <Icon big={true} name={Icons.price_down} />;
											break;
									}
								}
								break;
							case 'time':
								iconValue = <Icon big={true} name={Icons.time_up_down} />;
								if (value === sort.value) {
									switch (sort.order) {
										case 0:
											iconValue = (
												<Icon big={true} name={Icons.time_up_down} />
											);
											break;
										case 1:
											iconValue = <Icon big={true} name={Icons.time_up} />;
											break;
										case -1:
											iconValue = <Icon big={true} name={Icons.time_down} />;
											break;
									}
								}
								break;
							case 'washing':
								iconValue = <Icon big={true} name={Icons.washing_up_down} />;
								if (value === sort.value) {
									switch (sort.order) {
										case 0:
											iconValue = (
												<Icon big={true} name={Icons.washing_up_down} />
											);
											break;
										case 1:
											iconValue = <Icon big={true} name={Icons.washing_up} />;
											break;
										case -1:
											iconValue = (
												<Icon big={true} name={Icons.washing_down} />
											);
											break;
									}
								}
								break;
						}
						return (
							<Button
								key={value}
								icon={iconValue}
								big={true}
								active={sort.value === value && sort.order !== 0 ? true : false}
								onClick={() => {
									if (sort.value === value) {
										// pressed active button
										let newOrder = -1;
										if (sort.order < 1) {
											newOrder = sort.order + 1;
										}
										setSort({
											value: value,
											order: newOrder, // start with ascending
										});
										console.log(value, newOrder);
									} else {
										// pressed different button
										setSort({
											value: value,
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
