import murray from './assets/murray.png';
import flemington from './assets/flemington.png';
import norristown from './assets/norristown.png';
import pasteurized from './assets/pasteurized.png';
import fremont from './assets/fremont.png';
import prosperity from './assets/prosperity.png';
import cloverleaf from './assets/cloverleaf.png';
import carson from './assets/carson.png';
import orrington from './assets/orrington.png';
import moscow from './assets/moscow.png';
import peninsula from './assets/peninsula.png';
import woodland from './assets/woodland.png';

function MilkLabels() {
    return (
        <div className="grid-container">
            <div className="grid">
                <div className="grid-item"><img src={murray} alt="Image of vintage milk cap from JF Murray in Muncy PA" className='item-1' />
                    <span className='upper-span'>ITEM: 01</span>
                    <span className='mid-span'>J.F. MURRAY RAW MILK, CIRCA 1940S</span>
                    <span className='lower-span'>GOOD, SOME FADING AND MINOR EDGE WEAR</span>
                </div>
                <div className="grid-item">
                    <img src={flemington} alt="Image of vintage milk cap from Bush Dairies in Flemington NJ" className='item-2' />
                    <span className='upper-span'>ITEM: 02</span>
                    <span className='mid-span'>BUSH'S PASTEURIZED MILK, CIRCA 1950S</span>
                    <span className='lower-span'>VERY GOOD, SLIGHT DISCOLORATION, CLEAN SURFACE</span>
                </div>
                <div className="grid-item">
                    <img src={norristown} alt="Image of vintage milk cap with brown background and text" className='item-3' />
                    <span className='upper-span'>ITEM: 03</span>
                    <span className='mid-span'>BELFRY FARM RAW JERSEY MILK, CIRCA 1930S</span>
                    <span className='lower-span'>FAIR, NOTICEABLE WEAR, SOME STAINING</span>
                </div>
                <div className="grid-item">
                    <img src={pasteurized} alt="Image of vintage milk cap with blue background" className='item-4' />
                    <span className='upper-span'>ITEM: 04</span>
                    <span className='mid-span'>HOMOGENIZED MILK - PASTEURIZED, CIRCA 1960S</span>
                    <span className='lower-span'>EXCELLENT, VIBRANT COLORS, MINIMAL WEAR</span>
                </div>
                <div className="grid-item">
                    <img src={fremont} alt="Image of vintage milk cap from Cloverdale Creamery" className='item-5' />
                    <span className='upper-span'>ITEM: 05</span>
                    <span className='mid-span'>BUSH'S PASTEURIZED MILK, CIRCA 1950</span>
                    <span className='lower-span'>GOOD, SOME FADING AND MINOR EDGE WEAR</span>
                </div>
                <div className="grid-item">
                    <img src={prosperity} alt="Image of vintage milk cap with text &quot;Drink More Milk for Health and Prosperity&quot;" className='item-6' />
                    <span className='upper-span'>ITEM: 06</span>
                    <span className='mid-span'>DRINK MORE MILK - FOR HEALTH AND PROSPERITY, CIRCA 1950S</span>
                    <span className='lower-span'>GOOD, MINOR SCUFFS, BUT COLORS ARE STILL BRIGHT</span>
                </div>
                <div className="grid-item">
                    <img src={cloverleaf} alt="Image of vintage milk cap from Cloverleaf Dairy" className='item-7' />
                    <span className='upper-span'>ITEM: 07</span>
                    <span className='mid-span'>CLOVERLEAF DAIRY VITAMIN D MILK, CIRCA 1940S</span>
                    <span className='lower-span'>VERY GOOD, CLEAN SURFACE, SLIGHT EDGE WEAR</span>
                </div>
                <div className="grid-item">
                    <img src={carson} alt="Image of vintage milk cap from Carson Dairy" className='item-8' />
                    <span className='upper-span'>ITEM: 08</span>
                    <span className='mid-span'>CARSON DAIRY RAW MILK, CIRCA 1950S</span>
                    <span className='lower-span'>FAIR, SIGNIFICANT SURFACE WEAR, SOME DISCOLORATION</span>
                </div>
                <div className="grid-item">
                    <img src={orrington} alt="Image of vintage heavy cream cap from R.L Perkins in Orrington ME" className='item-9' />
                    <span className='upper-span'>ITEM: 09</span>
                    <span className='mid-span'>R.L. PERKINS HEAVY CREAM, CIRCA 1940S</span>
                    <span className='lower-span'>GOOD, SOME FADING AND MINOR EDGE WEAR</span>
                </div>
                <div className="grid-item">
                    <img src={moscow} alt="Image of vintage milk cap from Maple View Farm Dairy in Moscow PA" className='item-10' />
                    <span className='upper-span'>ITEM: 10</span>
                    <span className='mid-span'>MAPLE VIEW WHIPPING CREAM, CIRCA 1945S</span>
                    <span className='lower-span'>VERY GOOD, CLEAN SURFACE, SLIGHT EDGE WEAR</span>
                </div>
                <div className="grid-item">
                    <img src={peninsula} alt="Image of vintage milk cap from Peninsula Dairy" className='item-11' />
                    <span className='upper-span'>ITEM: 11</span>
                    <span className='mid-span'>PENINSULA DAIRY MILK, CIRCA 1950S</span>
                    <span className='lower-span'>VERY GOOD, SLIGHT DISCOLORATION, CLEAN SURFACE</span>
                </div>
                <div className="grid-item">
                    <img src={woodland} alt="Image of vintage milk cap from Hartwig Dairy" className='item-12' />
                    <span className='upper-span'>ITEM: 12</span>
                    <span className='mid-span'>HARTWIG DAIRY GRADE A RAW MILK, CIRCA 1930S</span>
                    <span className='lower-span'>FAIR, NOTICEABLE WEAR, SOME STAINING</span>
                </div>
            </div>
        </div>
    )
}

export default MilkLabels;