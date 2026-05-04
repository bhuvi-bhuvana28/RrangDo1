/* ===============================
   CATEGORY PRODUCTS DATA
=================================*/

const categoryProducts = {

  architecture: [
    {image:"image/3Dbuildingplan.png",name:"3D Building Plan", price:2500,img1:"image/3Dbuildingplan.png",
img2:"image/3Dplanning2.png",
img3:"image/3Dbuildingplan1.png"},
    {image:"image/interior.png",name:"Interior Design Layout", price:4000},
    {image:"image/structural.png",name:"Structural Drawing", price:3500},
    {image:"image/elevation.png",name:"Elevation Plan", price:2000},
    {image:"image/siteplanning.png",name:"Site Planning Design", price:5000},
    {image:"image/modernvilla.png", name:"Modern Villa Design", price:6500},
  {image:"image/commercialplan.png", name:"Commercial Building Plan", price:8000},
  {image:"image/houseblueprint.png", name:"House Blueprint", price:3000},
  {image:"image/landscapeplan.png", name:"Landscape Design Plan", price:4500},
  {image: "image/apartmentfloor.png",name: "Apartment Floor Plan",price: 3200},
  {image: "image/duplexhouseplan.png",name: "Duplex House Plan",price: 5500}
  ],

  foundation: [
    {image:"image/ultratechcement.png",name:"UltraTech Cement", price:420},
    {image:"image/concretemix.png",name:"Concrete Mix", price:600},
    {image:"image/foundationsand.png",name:"Foundation Sand", price:300},
    {image:"image/bricks.png",name:"Bricks Pack", price:700},
    {image:"image/gravel.png",name:"Gravel Load", price:1500},
    {image:"image/acc.png",name:"ACC Cement", price:410},
  {image:"image/ambuja.png",name:"Ambuja Cement", price:430},
  {image:"image/birlacement.png",name:"Birla Cement", price:415},
  {image:"image/shreecement.png",name:"Shree Cement", price:400},

  {image:"image/whitecement.png",name:"White Cement 25kg", price:750},
  {image:"image/wallputty.png",name:"Wall Putty 20kg", price:900},

  {image:"image/roff_t01.png",name:"Roff T01 Tile Adhesive", price:405},
  {image:"image/roff_t02.png",name:"Roff T02 Tile Adhesive", price:695},
  {image:"image/roff_t09.png",name:"Roff T09 Tile Adhesive", price:560},

  {image:"image/laticrete305.png",name:"MYK Laticrete 305", price:385},
  {image:"image/laticrete315.png",name:"MYK Laticrete 315", price:420},

  {image:"image/flyashbricks.png",name:"Fly Ash Bricks Pack", price:650},
  {image:"image/hollowblocks.png",name:"Hollow Blocks", price:800}
  ],

  electrical: [
    {image:"image/electricalwire.png",name:"Electrical Wire Roll", price:1200},
    {image:"image/switchboard.png",name:"Switch Board", price:350},
    {image:"image/ledbulb.png",name:"LED Bulb Pack", price:500},
    {image:"image/mcbbox.png",name:"MCB Box", price:1500},
    {image:"image/electricalpanel.png",name:"Electrical Panel", price:4500},
    {image:"image/extensionboard.png", name:"Extension Board", price:450},
  {image:"image/circuitbreaker.png", name:"Circuit Breaker", price:800},
  {image:"image/ceilingfan.png", name:"Ceiling Fan", price:2200},
  {image:"image/exhaustfan.png", name:"Exhaust Fan", price:1500},
  {image:"image/inverter.png", name:"Inverter", price:8500},
  {image:"image/battery.png", name:"Inverter Battery", price:9500},
  {image:"image/socket.png", name:"Power Socket", price:120},
  {image:"image/stabilizer.png", name:"Voltage Stabilizer", price:3000},
  {image:"image/tubelights.png", name:"Tube Light Set", price:600},
  {image:"image/smartplug.png", name:"Smart Plug", price:900},
  {image:"image/conduitpipe.png", name:"PVC Conduit Pipe", price:120, img1:"image/conduitpipe.png", img2:"image/conduitpipe2.png", img3:"image/conduitpipe3.png"},
{image:"image/elbow.png", name:"Elbow", price:15, img1:"image/elbow.png", img2:"image/elbow2.png", img3:"image/elbow3.png"},
{image:"image/tee.png", name:"Tee", price:18, img1:"image/tee.png", img2:"image/tee2.png", img3:"image/tee3.png"},
{image:"image/coupling.png", name:"Coupling", price:10, img1:"image/coupling.png", img2:"image/coupling2.png", img3:"image/coupling3.png"},
{image:"image/bend.png", name:"Bend", price:20, img1:"image/bend.png", img2:"image/bend2.png", img3:"image/bend3.png"},
{image:"image/saddle.png", name:"Saddle Patti", price:5, img1:"image/saddle.png", img2:"image/saddle2.png", img3:"image/saddle3.png"},
{image:"image/junctionbox.png", name:"Junction Box", price:40, img1:"image/junctionbox.png", img2:"image/junctionbox2.png", img3:"image/junctionbox3.png"},
{image:"image/reducer.png", name:"Reducer", price:12, img1:"image/reducer.png", img2:"image/reducer2.png", img3:"image/reducer3.png"},
{image:"image/extensionring.png", name:"Extension Ring", price:25, img1:"image/extensionring.png", img2:"image/extensionring2.png", img3:"image/extensionring3.png"},
{image:"image/bush.png", name:"Female Bush Adapter", price:10, img1:"image/bush.png", img2:"image/bush2.png", img3:"image/bush3.png"},
{image:"image/pvccement.png", name:"PVC Cement", price:90, img1:"image/pvccement.png", img2:"image/pvccement2.png", img3:"image/pvccement3.png"},
{image:"image/bendingspring.png", name:"Bending Spring", price:150, img1:"image/bendingspring.png", img2:"image/bendingspring2.png", img3:"image/bendingspring3.png"},
{image:"image/fanbox.png", name:"Fan Box", price:120, img1:"image/fanbox.png", img2:"image/fanbox2.png", img3:"image/fanbox3.png"},

{image:"image/casing.png", name:"Casing Capping", price:80, img1:"image/casing.png", img2:"image/casing2.png", img3:"image/casing3.png"},
{image:"image/internalbend.png", name:"Internal Bend", price:20, img1:"image/internalbend.png", img2:"image/internalbend2.png", img3:"image/internalbend3.png"},
{image:"image/externalbend.png", name:"External Bend", price:20, img1:"image/externalbend.png", img2:"image/externalbend2.png", img3:"image/externalbend3.png"},
{image:"image/squarebox.png", name:"Square Box", price:50, img1:"image/squarebox.png", img2:"image/squarebox2.png", img3:"image/squarebox3.png"},

{image:"image/paneltrunking.png", name:"Panel Trunking", price:300, img1:"image/paneltrunking.png", img2:"image/paneltrunking2.png", img3:"image/paneltrunking3.png"},

{image:"image/switch.png", name:"Switch", price:50, img1:"image/switch.png", img2:"image/switch2.png", img3:"image/switch3.png"},
{image:"image/socket.png", name:"Socket", price:60, img1:"image/socket.png", img2:"image/socket2.png", img3:"image/socket3.png"},
{image:"image/dimmer.png", name:"Dimmer", price:250, img1:"image/dimmer.png", img2:"image/dimmer2.png", img3:"image/dimmer3.png"},
{image:"image/regulator.png", name:"Fan Regulator", price:300, img1:"image/regulator.png", img2:"image/regulator2.png", img3:"image/regulator3.png"},
{image:"image/indicator.png", name:"Indicator", price:40, img1:"image/indicator.png", img2:"image/indicator2.png", img3:"image/indicator3.png"},
{image:"image/fuse.png", name:"Fuse", price:30, img1:"image/fuse.png", img2:"image/fuse2.png", img3:"image/fuse3.png"},
{image:"image/dpswitch.png", name:"DP Switch", price:250, img1:"image/dpswitch.png", img2:"image/dpswitch2.png", img3:"image/dpswitch3.png"},

{image:"image/gangbox.png", name:"Gang Box", price:40, img1:"image/gangbox.png", img2:"image/gangbox2.png", img3:"image/gangbox3.png"},
{image:"image/switchboard.png", name:"Switch Board", price:200, img1:"image/switchboard.png", img2:"image/switchboard2.png", img3:"image/switchboard3.png"},
{image:"image/surfacebox.png", name:"Surface Box", price:60, img1:"image/surfacebox.png", img2:"image/surfacebox2.png", img3:"image/surfacebox3.png"},
{image:"image/concealedbox.png", name:"Concealed Box", price:50, img1:"image/concealedbox.png", img2:"image/concealedbox2.png", img3:"image/concealedbox3.png"},

{image:"image/mcb.png", name:"MCB", price:350, img1:"image/mcb.png", img2:"image/mcb2.png", img3:"image/mcb3.png"},
{image:"image/rccb.png", name:"RCCB", price:1200, img1:"image/rccb.png", img2:"image/rccb2.png", img3:"image/rccb3.png"},
{image:"image/isolator.png", name:"Isolator", price:500, img1:"image/isolator.png", img2:"image/isolator2.png", img3:"image/isolator3.png"},
{image:"image/mcbbox.png", name:"MCB Box", price:400, img1:"image/mcbbox.png", img2:"image/mcbbox2.png", img3:"image/mcbbox3.png"},
{image:"image/db.png", name:"Distribution Board", price:1500, img1:"image/db.png", img2:"image/db2.png", img3:"image/db3.png"},

{image:"image/bulbholder.png", name:"Bulb Holder", price:40, img1:"image/bulbholder.png", img2:"image/bulbholder2.png", img3:"image/bulbholder3.png"},
{image:"image/extensionbox.png", name:"Extension Box", price:300, img1:"image/extensionbox.png", img2:"image/extensionbox2.png", img3:"image/extensionbox3.png"},
{image:"image/linetester.png", name:"Line Tester", price:120, img1:"image/linetester.png", img2:"image/linetester2.png", img3:"image/linetester3.png"},
{image:"image/multiplug.png", name:"Multiplug", price:200, img1:"image/multiplug.png", img2:"image/multiplug2.png", img3:"image/multiplug3.png"},
{image:"image/spikeguard.png", name:"Spike Guard", price:500, img1:"image/spikeguard.png", img2:"image/spikeguard2.png", img3:"image/spikeguard3.png"},

{image:"image/pvctape.png", name:"PVC Tape", price:20, img1:"image/pvctape.png", img2:"image/pvctape2.png", img3:"image/pvctape3.png"},
{image:"image/cabletie.png", name:"Cable Tie", price:2, img1:"image/cabletie.png", img2:"image/cabletie2.png", img3:"image/cabletie3.png"},
{image:"image/wallplug.png", name:"Wall Plug", price:3, img1:"image/wallplug.png", img2:"image/wallplug2.png", img3:"image/wallplug3.png"},
{image:"image/wireclip.png", name:"Wire Clip", price:2, img1:"image/wireclip.png", img2:"image/wireclip2.png", img3:"image/wireclip3.png"},

{image:"image/doorbell.png", name:"Door Bell", price:250, img1:"image/doorbell.png", img2:"image/doorbell2.png", img3:"image/doorbell3.png"},
{image:"image/wirelessbell.png", name:"Wireless Door Bell", price:800, img1:"image/wirelessbell.png", img2:"image/wirelessbell2.png", img3:"image/wirelessbell3.png"},

{image:"image/wire.png", name:"Single Core Wire", price:1500, img1:"image/wire.png", img2:"image/wire2.png", img3:"image/wire3.png"},
{image:"image/multicore.png", name:"Multi Core Cable", price:3000, img1:"image/multicore.png", img2:"image/multicore2.png", img3:"image/multicore3.png"},
{image:"image/lan.png", name:"LAN Cable", price:2500, img1:"image/lan.png", img2:"image/lan2.png", img3:"image/lan3.png"},
{image:"image/coaxial.png", name:"Coaxial Cable", price:1800, img1:"image/coaxial.png", img2:"image/coaxial2.png", img3:"image/coaxial3.png"}
  ],

  plumbing: [
    {image:"image/pvcpipe.png",name:"PVC Pipe", price:300},
    {image:"image/watertap.png",name:"Water Tap", price:250},
    {image:"image/watertank.png",name:"Water Tank 500L", price:3500},
    {image:"image/shower.png",name:"Shower Set", price:1800},
    {image:"image/drainagepipe.png",name:"Drainage Pipe", price:400},
    {image:"image/placeholder.png", name:"Flush Tank", price:1200},
  {image:"image/placeholder.png", name:"Wash Basin", price:2500},
  {image:"image/placeholder.png", name:"Toilet Seat", price:3000},
  {image:"image/placeholder.png", name:"Hand Shower", price:900},
  {image:"image/placeholder.png", name:"Wall Mixer Tap", price:2200},
  {image:"image/placeholder.png", name:"Sink Pipe", price:350},
  {image:"image/placeholder.png", name:"Ball Valve", price:180},
  {image:"image/placeholder.png", name:"Pipe Clamp", price:120},
  {image:"image/placeholder.png", name:"Water Filter", price:4500},
  {image:"image/placeholder.png", name:"Overhead Shower", price:2000}
  ],

  paints: [
    {image:"image/asianpaints.png",name:"Asian Paints Premium", price:950},
    {image:"image/bergerpaint.png",name:"Berger Paint", price:880},
    {image:"image/wallprimer.png",name:"Wall Primer", price:600},
    {image:"image/exteriorpaint.png",name:"Exterior Paint", price:1200},
    {image:"image/enamelpaint.png",name:"Enamel Paint", price:750},
    {image:"image/placeholder.png", name:"Interior Emulsion Paint", price:1100},
  {image:"image/placeholder.png", name:"Distemper Paint", price:500},
  {image:"image/placeholder.png", name:"Waterproof Paint", price:1300},
  {image:"image/placeholder.png", name:"Texture Paint", price:1800},
  {image:"image/placeholder.png", name:"Wood Polish", price:900},
  {image:"image/placeholder.png", name:"Metal Paint", price:850},
  {image:"image/placeholder.png", name:"Anti Damp Paint", price:1400},
  {image:"image/placeholder.png", name:"Ceiling Paint", price:700},
  {image:"image/placeholder.png", name:"Spray Paint", price:300},
  {image:"image/placeholder.png", name:"Primer for Wood", price:650}
  ],

  tiles: [
    {image:"image/granitetiles.png",name:"Granite Tiles", price:75},
    {image:"image/marbletiles.png",name:"Marble Tiles", price:90},
    {image:"image/floortiles.png",name:"Floor Tiles", price:60},
    {image:"image/bathroomtiles.png",name:"Bathroom Tiles", price:85},
    {image:"image/walltiles.png",name:"Wall Tiles", price:55},
    {image:"image/placeholder.png", name:"Vitrified Tiles", price:95},
  {image:"image/placeholder.png", name:"Ceramic Tiles", price:70},
  {image:"image/placeholder.png", name:"Porcelain Tiles", price:110},
  {image:"image/placeholder.png", name:"Kitchen Tiles", price:80},
  {image:"image/placeholder.png", name:"Outdoor Tiles", price:120},
  {image:"image/placeholder.png", name:"Parking Tiles", price:100},
  {image:"image/placeholder.png", name:"Wood Finish Tiles", price:130},
  {image:"image/placeholder.png", name:"Anti-Skid Tiles", price:115},
  {image:"image/placeholder.png", name:"Designer Tiles", price:150},
  {image:"image/placeholder.png", name:"Glass Mosaic Tiles", price:200}
  ],

  pipes: [
  {image:"image/steelpipe.png", name:"Steel Pipe", price:500, img1:"image/steelpipe.png", img2:"image/steelpipe2.png", img3:"image/steelpipe3.png"},
  {image:"image/gipipe.png", name:"GI Pipe", price:600, img1:"image/gipipe.png", img2:"image/gipipe2.png", img3:"image/gipipe3.png"},
  {image:"image/pvcdrainpipe.png", name:"PVC Drain Pipe", price:350, img1:"image/pvcdrainpipe.png", img2:"image/pvcdrainpipe2.png", img3:"image/pvcdrainpipe3.png"},
  {image:"image/industrialpipe.png", name:"Industrial Pipe", price:900, img1:"image/industrialpipe.png", img2:"image/industrialpipe2.png", img3:"image/industrialpipe3.png"},
  {image:"image/watersupplypipe.png", name:"Water Supply Pipe", price:450, img1:"image/watersupplypipe.png", img2:"image/watersupplypipe2.png", img3:"image/watersupplypipe3.png"},

  {image:"image/pvcpipe.png", name:"PVC Pipe", price:300, img1:"image/pvcpipe.png", img2:"image/pvcpipe2.png", img3:"image/pvcpipe3.png"},
  {image:"image/cpvcpipe.png", name:"CPVC Pipe", price:400, img1:"image/cpvcpipe.png", img2:"image/cpvcpipe2.png", img3:"image/cpvcpipe3.png"},
  {image:"image/upvcpipe.png", name:"UPVC Pipe", price:380, img1:"image/upvcpipe.png", img2:"image/upvcpipe2.png", img3:"image/upvcpipe3.png"},
  {image:"image/hdpepipe.png", name:"HDPE Pipe", price:550, img1:"image/hdpepipe.png", img2:"image/hdpepipe2.png", img3:"image/hdpepipe3.png"},
  {image:"image/mdpepipe.png", name:"MDPE Pipe", price:520, img1:"image/mdpepipe.png", img2:"image/mdpepipe2.png", img3:"image/mdpepipe3.png"},

  {image:"image/pexpipe.png", name:"PEX Pipe", price:600, img1:"image/pexpipe.png", img2:"image/pexpipe2.png", img3:"image/pexpipe3.png"},
  {image:"image/concretepipe.png", name:"Concrete Pipe", price:1000, img1:"image/concretepipe.png", img2:"image/concretepipe2.png", img3:"image/concretepipe3.png"},
  {image:"image/copperpipe.png", name:"Copper Pipe", price:1200, img1:"image/copperpipe.png", img2:"image/copperpipe2.png", img3:"image/copperpipe3.png"},
  {image:"image/aluminumpipe.png", name:"Aluminum Pipe", price:1100, img1:"image/aluminumpipe.png", img2:"image/aluminumpipe2.png", img3:"image/aluminumpipe3.png"},
  {image:"image/castironpipe.png", name:"Cast Iron Pipe", price:950, img1:"image/castironpipe.png", img2:"image/castironpipe2.png", img3:"image/castironpipe3.png"},

  {image:"image/ductileiron.png", name:"Ductile Iron Pipe", price:980, img1:"image/ductileiron.png", img2:"image/ductileiron2.png", img3:"image/ductileiron3.png"},
  {image:"image/sewerpipe.png", name:"Sewer Pipe", price:700, img1:"image/sewerpipe.png", img2:"image/sewerpipe2.png", img3:"image/sewerpipe3.png"},
  {image:"image/drainpipe.png", name:"Drainage Pipe", price:360, img1:"image/drainpipe.png", img2:"image/drainpipe2.png", img3:"image/drainpipe3.png"},
  {image:"image/flexiblepipe.png", name:"Flexible Pipe", price:650, img1:"image/flexiblepipe.png", img2:"image/flexiblepipe2.png", img3:"image/flexiblepipe3.png"},
  {image:"image/gaspipe.png", name:"Gas Pipe", price:750, img1:"image/gaspipe.png", img2:"image/gaspipe2.png", img3:"image/gaspipe3.png"}
  ],

  tools: [
  {image:"image/drillmachine.png", name:"Drill Machine", price:1800, img1:"image/drillmachine.png", img2:"image/drillmachine2.png", img3:"image/drillmachine3.png"},
  {image:"image/hammer.png", name:"Hammer", price:250, img1:"image/hammer.png", img2:"image/hammer2.png", img3:"image/hammer3.png"},
  {image:"image/concretemixer.png", name:"Concrete Mixer", price:12000, img1:"image/concretemixer.png", img2:"image/concretemixer2.png", img3:"image/concretemixer3.png"},
  {image:"image/safetyhelmet.png", name:"Safety Helmet", price:450, img1:"image/safetyhelmet.png", img2:"image/safetyhelmet2.png", img3:"image/safetyhelmet3.png"},
  {image:"image/measuringtape.png", name:"Measuring Tape", price:150, img1:"image/measuringtape.png", img2:"image/measuringtape2.png", img3:"image/measuringtape3.png"},

  {image:"image/anglegrinder.png", name:"Angle Grinder", price:2200, img1:"image/anglegrinder.png", img2:"image/anglegrinder2.png", img3:"image/anglegrinder3.png"},
  {image:"image/circularsaw.png", name:"Circular Saw", price:3500, img1:"image/circularsaw.png", img2:"image/circularsaw2.png", img3:"image/circularsaw3.png"},
  {image:"image/powercutter.png", name:"Power Cutter", price:5000, img1:"image/powercutter.png", img2:"image/powercutter2.png", img3:"image/powercutter3.png"},
  {image:"image/handsaw.png", name:"Hand Saw", price:300, img1:"image/handsaw.png", img2:"image/handsaw2.png", img3:"image/handsaw3.png"},
  {image:"image/screwdriverset.png", name:"Screwdriver Set", price:400, img1:"image/screwdriverset.png", img2:"image/screwdriverset2.png", img3:"image/screwdriverset3.png"},

  {image:"image/spannerset.png", name:"Spanner Set", price:650, img1:"image/spannerset.png", img2:"image/spannerset2.png", img3:"image/spannerset3.png"},
  {image:"image/wrench.png", name:"Wrench", price:350, img1:"image/wrench.png", img2:"image/wrench2.png", img3:"image/wrench3.png"},
  {image:"image/toolbox.png", name:"Tool Kit Box", price:1200, img1:"image/toolbox.png", img2:"image/toolbox2.png", img3:"image/toolbox3.png"},
  {image:"image/ladder.png", name:"Ladder", price:2500, img1:"image/ladder.png", img2:"image/ladder2.png", img3:"image/ladder3.png"},
  {image:"image/tilecutter.png", name:"Tile Cutter", price:2800, img1:"image/tilecutter.png", img2:"image/tilecutter2.png", img3:"image/tilecutter3.png"},

  {image:"image/plier.png", name:"Plier", price:200, img1:"image/plier.png", img2:"image/plier2.png", img3:"image/plier3.png"},
  {image:"image/leveltool.png", name:"Spirit Level", price:500, img1:"image/leveltool.png", img2:"image/leveltool2.png", img3:"image/leveltool3.png"},
  {image:"image/chisel.png", name:"Chisel", price:180, img1:"image/chisel.png", img2:"image/chisel2.png", img3:"image/chisel3.png"},
  {image:"image/paintroller.png", name:"Paint Roller", price:220, img1:"image/paintroller.png", img2:"image/paintroller2.png", img3:"image/paintroller3.png"},
  {image:"image/safetygloves.png", name:"Safety Gloves", price:120, img1:"image/safetygloves.png", img2:"image/safetygloves2.png", img3:"image/safetygloves3.png"}
  ],

  auto: [
  {image:"image/trucktyre.png", name:"Truck Tyre", price:4500, img1:"image/trucktyre.png", img2:"image/trucktyre2.png", img3:"image/trucktyre3.png"},
  {image:"image/engineoil.png", name:"Engine Oil", price:900, img1:"image/engineoil.png", img2:"image/engineoil2.png", img3:"image/engineoil3.png"},
  {image:"image/brakepad.png", name:"Brake Pad", price:1500, img1:"image/brakepad.png", img2:"image/brakepad2.png", img3:"image/brakepad3.png"},
  {image:"image/battery.png", name:"Battery", price:5500, img1:"image/battery.png", img2:"image/battery2.png", img3:"image/battery3.png"},
  {image:"image/headlightset.png", name:"Headlight Set", price:2000, img1:"image/headlightset.png", img2:"image/headlightset2.png", img3:"image/headlightset3.png"},
  {image:"image/carttyre.png", name:"Car Tyre", price:3500, img1:"image/carttyre.png", img2:"image/carttyre2.png", img3:"image/carttyre3.png"},
  {image:"image/biketyre.png", name:"Bike Tyre", price:1800, img1:"image/biketyre.png", img2:"image/biketyre2.png", img3:"image/biketyre3.png"},
  {image:"image/alloywheels.png", name:"Alloy Wheels", price:8000, img1:"image/alloywheels.png", img2:"image/alloywheels2.png", img3:"image/alloywheels3.png"},
  {image:"image/carseatcover.png", name:"Car Seat Cover", price:2500, img1:"image/carseatcover.png", img2:"image/carseatcover2.png", img3:"image/carseatcover3.png"},
  {image:"image/carcover.png", name:"Car Cover", price:1200, img1:"image/carcover.png", img2:"image/carcover2.png", img3:"image/carcover3.png"},
  {image:"image/airfilter.png", name:"Air Filter", price:600, img1:"image/airfilter.png", img2:"image/airfilter2.png", img3:"image/airfilter3.png"},
  {image:"image/oilfilter.png", name:"Oil Filter", price:400, img1:"image/oilfilter.png", img2:"image/oilfilter2.png", img3:"image/oilfilter3.png"},
  {image:"image/sparkplug.png", name:"Spark Plug", price:250, img1:"image/sparkplug.png", img2:"image/sparkplug2.png", img3:"image/sparkplug3.png"},
  {image:"image/carbatterycharger.png", name:"Car Battery Charger", price:3000, img1:"image/carbatterycharger.png", img2:"image/carbatterycharger2.png", img3:"image/carbatterycharger3.png"},
  {image:"image/foglights.png", name:"Fog Lights", price:1800, img1:"image/foglights.png", img2:"image/foglights2.png", img3:"image/foglights3.png"},

  {image:"image/clutchplate.png", name:"Clutch Plate", price:2200, img1:"image/clutchplate.png", img2:"image/clutchplate2.png", img3:"image/clutchplate3.png"},
  {image:"image/radiator.png", name:"Radiator", price:4000, img1:"image/radiator.png", img2:"image/radiator2.png", img3:"image/radiator3.png"},
  {image:"image/silencer.png", name:"Silencer", price:2500, img1:"image/silencer.png", img2:"image/silencer2.png", img3:"image/silencer3.png"},
  {image:"image/wiper.png", name:"Wiper Blades", price:500, img1:"image/wiper.png", img2:"image/wiper2.png", img3:"image/wiper3.png"},
  {image:"image/indicator.png", name:"Indicator Light", price:700, img1:"image/indicator.png", img2:"image/indicator2.png", img3:"image/indicator3.png"},
  {image:"image/sideMirror.png", name:"Side Mirror", price:1500, img1:"image/sideMirror.png", img2:"image/sideMirror2.png", img3:"image/sideMirror3.png"},
  {image:"image/bumper.png", name:"Car Bumper", price:3500, img1:"image/bumper.png", img2:"image/bumper2.png", img3:"image/bumper3.png"},
  {image:"image/gearoil.png", name:"Gear Oil", price:800, img1:"image/gearoil.png", img2:"image/gearoil2.png", img3:"image/gearoil3.png"}
  ],

  manpower: [
    {name:"Daily Labour", price:800},
    {name:"Site Supervisor", price:1500},
    {name:"Electrician", price:1200},
    {name:"Plumber", price:1100},
    {name:"Carpenter", price:1300}
  ],
  cement: [
  {image:"image/opc53.png", name:"OPC 53 Grade Cement", price:450, img1:"image/opc53.png", img2:"image/opc53_2.png", img3:"image/opc53_3.png"},
  {image:"image/opc43.png", name:"OPC 43 Grade Cement", price:440, img1:"image/opc43.png", img2:"image/opc43_2.png", img3:"image/opc43_3.png"},
  {image:"image/opc33.png", name:"OPC 33 Grade Cement", price:430, img1:"image/opc33.png", img2:"image/opc33_2.png", img3:"image/opc33_3.png"},
  {image:"image/ppc.png", name:"Portland Pozzolana Cement (PPC)", price:420, img1:"image/ppc.png", img2:"image/ppc_2.png", img3:"image/ppc_3.png"},
  {image:"image/psc.png", name:"Portland Slag Cement (PSC)", price:430, img1:"image/psc.png", img2:"image/psc_2.png", img3:"image/psc_3.png"},
  {image:"image/rapid.png", name:"Rapid Hardening Cement", price:480, img1:"image/rapid.png", img2:"image/rapid_2.png", img3:"image/rapid_3.png"},
  {image:"image/quicksetting.png", name:"Quick Setting Cement", price:550, img1:"image/quicksetting.png", img2:"image/quicksetting_2.png", img3:"image/quicksetting_3.png"},
  {image:"image/lowheat.png", name:"Low Heat Cement", price:500, img1:"image/lowheat.png", img2:"image/lowheat_2.png", img3:"image/lowheat_3.png"},
  {image:"image/sulphateresistant.png", name:"Sulphate Resistant Cement", price:520, img1:"image/sulphateresistant.png", img2:"image/sulphateresistant_2.png", img3:"image/sulphateresistant_3.png"},
  {image:"image/highalumina.png", name:"High Alumina Cement", price:600, img1:"image/highalumina.png", img2:"image/highalumina_2.png", img3:"image/highalumina_3.png"},
  {image:"image/whitecement.png", name:"White Cement", price:650, img1:"image/whitecement.png", img2:"image/whitecement_2.png", img3:"image/whitecement_3.png"},
  {image:"image/colouredcement.png", name:"Coloured Cement", price:670, img1:"image/colouredcement.png", img2:"image/colouredcement_2.png", img3:"image/colouredcement_3.png"},
  {image:"image/hydrophobic.png", name:"Hydrophobic Cement", price:540, img1:"image/hydrophobic.png", img2:"image/hydrophobic_2.png", img3:"image/hydrophobic_3.png"},
  {image:"image/masonry.png", name:"Masonry Cement", price:400, img1:"image/masonry.png", img2:"image/masonry_2.png", img3:"image/masonry_3.png"},
  {image:"image/airentraining.png", name:"Air Entraining Cement", price:520, img1:"image/airentraining.png", img2:"image/airentraining_2.png", img3:"image/airentraining_3.png"},
  {image:"image/expansive.png", name:"Expansive Cement", price:580, img1:"image/expansive.png", img2:"image/expansive_2.png", img3:"image/expansive_3.png"},
  {image:"image/super.png", name:"Super Sulphated Cement", price:560, img1:"image/super.png", img2:"image/super_2.png", img3:"image/super_3.png"},
  {image:"image/oilwell.png", name:"Oil Well Cement", price:700, img1:"image/oilwell.png", img2:"image/oilwell_2.png", img3:"image/oilwell_3.png"},
  {image:"image/waterproof.png", name:"Waterproof Cement", price:530, img1:"image/waterproof.png", img2:"image/waterproof_2.png", img3:"image/waterproof_3.png"},
  {image:"image/blended.png", name:"Blended Cement", price:410, img1:"image/blended.png", img2:"image/blended_2.png", img3:"image/blended_3.png"}
  ],

  steel: [
  {image:"image/tmtsteelbar.png", name:"TMT Steel Bar", price:65, img1:"image/tmtsteelbar.png", img2:"image/tmtsteelbar2.png", img3:"image/tmtsteelbar3.png"},
  {image:"image/jswsteelrod.png", name:"JSW Steel Rod", price:70, img1:"image/jswsteelrod.png", img2:"image/jswsteelrod2.png", img3:"image/jswsteelrod3.png"},
  {image:"image/steelsheet.png", name:"Steel Sheet", price:1200, img1:"image/steelsheet.png", img2:"image/steelsheet2.png", img3:"image/steelsheet3.png"},
  {image:"image/ironrod10mm.png", name:"Iron Rod 10mm", price:550, img1:"image/ironrod10mm.png", img2:"image/ironrod10mm2.png", img3:"image/ironrod10mm3.png"},
  {image:"image/steelchannel.png", name:"Steel Channel", price:900, img1:"image/steelchannel.png", img2:"image/steelchannel2.png", img3:"image/steelchannel3.png"},

  {image:"image/msrod.png", name:"Mild Steel Rod", price:60, img1:"image/msrod.png", img2:"image/msrod2.png", img3:"image/msrod3.png"},
  {image:"image/hollowpipe.png", name:"Steel Hollow Pipe", price:800, img1:"image/hollowpipe.png", img2:"image/hollowpipe2.png", img3:"image/hollowpipe3.png"},
  {image:"image/angle.png", name:"Steel Angle", price:750, img1:"image/angle.png", img2:"image/angle2.png", img3:"image/angle3.png"},
  {image:"image/ibeam.png", name:"I-Beam Steel", price:1500, img1:"image/ibeam.png", img2:"image/ibeam2.png", img3:"image/ibeam3.png"},
  {image:"image/hbeam.png", name:"H-Beam Steel", price:1600, img1:"image/hbeam.png", img2:"image/hbeam2.png", img3:"image/hbeam3.png"},

  {image:"image/flats.png", name:"Steel Flats", price:700, img1:"image/flats.png", img2:"image/flats2.png", img3:"image/flats3.png"},
  {image:"image/squarebar.png", name:"Square Steel Bar", price:680, img1:"image/squarebar.png", img2:"image/squarebar2.png", img3:"image/squarebar3.png"},
  {image:"image/roundbar.png", name:"Round Steel Bar", price:650, img1:"image/roundbar.png", img2:"image/roundbar2.png", img3:"image/roundbar3.png"},
  {image:"image/coils.png", name:"Steel Coil", price:2000, img1:"image/coils.png", img2:"image/coils2.png", img3:"image/coils3.png"},
  {image:"image/wire.png", name:"Binding Wire", price:90, img1:"image/wire.png", img2:"image/wire2.png", img3:"image/wire3.png"},

  {image:"image/galvanized.png", name:"Galvanized Steel Sheet", price:1300, img1:"image/galvanized.png", img2:"image/galvanized2.png", img3:"image/galvanized3.png"},
  {image:"image/stainless.png", name:"Stainless Steel Sheet", price:2200, img1:"image/stainless.png", img2:"image/stainless2.png", img3:"image/stainless3.png"},
  {image:"image/roofing.png", name:"Steel Roofing Sheet", price:1400, img1:"image/roofing.png", img2:"image/roofing2.png", img3:"image/roofing3.png"},
  {image:"image/mesh.png", name:"Steel Mesh", price:1100, img1:"image/mesh.png", img2:"image/mesh2.png", img3:"image/mesh3.png"},
  {image:"image/pipe.png", name:"Steel Pipe", price:850, img1:"image/pipe.png", img2:"image/pipe2.png", img3:"image/pipe3.png"}
  ],
  
};

