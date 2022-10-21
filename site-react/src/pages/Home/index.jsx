import { SectionBanner } from '../../components/SectionBanner';
import { SectionCards } from '../../components/SectionCards';
import { SetionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionValues } from '../../components/SectionValues';
import './style.css';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">
                
                <SectionBanner/>

                <SectionCards />

                <SetionReasons />

                <SectionSpecialists />

                <SectionValues />

            </div>
        </div>
    )
}