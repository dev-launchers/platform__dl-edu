import React from 'react'
import { useParams } from 'react-router-dom'
import learnData from '../data/learnData.json'
import LegacyLearnItem from './LegacyLearnItem'

function LegacyLearnList() {
    const params = useParams()

    const learnDataForTab = learnData
        .filter(ld => ld.tab.toLowerCase() === params.tab && ld.isActive.toLowerCase() === "true")
        .map(ld => {
            // TODO this map is only needed bc the learnData doesn't have leading "/" for local files. 
            // We can just update the "database" once we have one
            return {
                ...ld,
                imageSrc: ld.imageSrc.startsWith('http') ? ld.imageSrc : `/${ld.imageSrc}`
            }
        })
        .map((ld, i) => <LegacyLearnItem key={i} learnDatum={ld} />)


    return (
        <div style={{ display: 'flex', flexFlow: 'wrap', gap: '50px 20px' }}>
            {learnDataForTab}
        </div>
    )
}

export default LegacyLearnList