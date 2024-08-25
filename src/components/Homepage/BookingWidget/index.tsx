'use client';
import { useQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';

import { getCountriesQuery, serverClient } from '@/api';
import { Button } from '@/components/UI/Button';
import { DropDownOption } from '@/components/UI/DropDown/types';
import {
	CalendarIcon,
	MapPinIcon,
	PersonIcon,
	RoomTypeIcon,
} from '@/constants/icons';
import { mapCountriesToOptions } from '@/helpers';
import { CountriesResponse } from '@/types';

import styles from './booking-widget.module.scss';
import { BookingParameter } from './components/BookingParameter';
import {
	DEFAULT_LOCATION_OPTION,
	DEFAULT_PERSONS_OPTION,
	DEFAULT_ROOM_TYPE,
	PERSONS_OPTIONS,
	ROOM_TYPES,
} from './constants';

export const BookingWidget = () => {
	const { data } = useQuery<CountriesResponse>(getCountriesQuery, {
		client: serverClient,
	});

	const locationOptions = useMemo(() => {
		if (!data?.countries) {
			return [];
		}

		return mapCountriesToOptions(data.countries);
	}, [data?.countries]);

	const [selectedLocation, setSelectedLocation] = useState<DropDownOption>(
		DEFAULT_LOCATION_OPTION
	);

	useEffect(() => {
		if (locationOptions.length) {
			setSelectedLocation(locationOptions[0]);
		}
	}, [locationOptions]);

	const [selectedRoomType, setSelectedRoomType] =
		useState<DropDownOption>(DEFAULT_ROOM_TYPE);
	const [selecetdPersons, setSelectedPersons] = useState<DropDownOption>(
		DEFAULT_PERSONS_OPTION
	);
	const [selectedCheckInDate, setSelectedCheckInDate] = useState(new Date());
	const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(new Date());

	const handleCheckInDateChange = (date: Date | null) => {
		setSelectedCheckInDate(date || new Date());
	};
	const handleCheckOutDateChange = (date: Date | null) => {
		setSelectedCheckOutDate(date || new Date());
	};

	return (
		<div className={styles.container}>
			<BookingParameter
				icon={<MapPinIcon />}
				label="Location"
				type="dropdown"
				value={selectedLocation}
				onSelect={setSelectedLocation}
				options={locationOptions}
			/>
			<BookingParameter
				icon={<RoomTypeIcon />}
				label="Room Type"
				type="dropdown"
				value={selectedRoomType}
				onSelect={setSelectedRoomType}
				options={ROOM_TYPES}
			/>
			<BookingParameter
				icon={<PersonIcon />}
				label="Person"
				type="dropdown"
				value={selecetdPersons}
				onSelect={setSelectedPersons}
				options={PERSONS_OPTIONS}
			/>
			<BookingParameter
				icon={<CalendarIcon />}
				label="Check in"
				type="date"
				onDateChange={handleCheckInDateChange}
				date={selectedCheckInDate}
			/>
			<BookingParameter
				icon={<CalendarIcon />}
				label="Check out"
				type="date"
				onDateChange={handleCheckOutDateChange}
				date={selectedCheckOutDate}
			/>
			<Button fontColor="white">Book Now</Button>
		</div>
	);
};
