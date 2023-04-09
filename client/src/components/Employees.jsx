import Employee from './Employee'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import '../stylesheets/employee.css'

import getData from '../getInfo/getSearchRes'

const Employees = (props) => {
	const [search, setSearch] = useState('');
	const [data, setData] = useState([]);
	const [searchButton, setSearchButton] = useState(true);
	// console.log(props.data)

	const getSearch = () => {
		async function fetchdata(searchFeild) {
			const newData = await getData({ aadhar_number: searchFeild });
			setData(newData);
		}

		fetchdata(search);
	}

	useEffect(()=>{
		if(!search?.length) {
			setData([])
		}
	}, [search])

	return (
		<div className='grid-center'>
			<div className="search-wrapper">
				<div className="search-bar">
					<input
						type="text"
						placeholder='Search for users...'
						value={search}
						onChange={(e) => { setSearch(e.target.value) }}
					/>
					<div className="search-icon" onClick={() => { getSearch() }}>
						<FontAwesomeIcon
							icon={faSearch}
							id='search'
							title='search'
						/>
					</div>
				</div>
			</div>
			<div className="products-wrapper">
				{
					(!data?.length) ?
					""
					: <Employee title={data[0].first_name} description={data[0].aadhar_number} flags={data[0].flags}data={data} />
				}
			</div>
		</div>
	)
}

export default Employees