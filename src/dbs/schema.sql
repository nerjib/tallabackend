create table users(
    id serial,
    last_name varchar(50) not null,
    first_name varchar(50) not null,
    other_name varchar(50),
    phone varchar(20) not null,
    email varchar(50) not null,
    role varchar(50),
    lga varchar(50) not null,
    active varchar(50) not null
);

create table reports(
    id serial,
    uid varchar(50) not null,
    summary varchar(200),
    summaryfrom varchar(50),
    summaryto varchar(50),
    followup varchar(200),
    conclusion varchar(150),
    date timestamp,
    compliance varchar(50),
    pid int(50),
    gps varchar(100),
    complete varchar(50),
    pstatus varchar(100),
    sitestatus varchar(100),
    sitegps varchar(100)
);
create table weeklyreports(
    id serial,
    uid integer not null,
    summary varchar(200),
    summaryfrom varchar(50),
    summaryto varchar(50),
    followup varchar(200),
    conclusion varchar(150),
    date timestamp,
    compliance varchar(50),
    pid integer,
    gps varchar(100),
    complete varchar(50),
    pstatus varchar(100),
    sitestatus varchar(100)
);

create table projects(
    id serial,
    state_id int(50),
    local_id int(20),
    location varchar(100),
    lga varchar(50),
    status varchar(50),
    started varchar(50),
    finish varchar(50),
    wardheadphone varchar(50),
    title varchar(100),
    gps varchar(100),
    contractor_id int(50),
    lot varchar(50),
    type varchar(50),
    ward varchar(100),
    facility varchar(100),
    community varchar(100),
    compartment varchar(100),
    phase varchar(100),
    pstatus varchar(500)
    );

     
create table reportactivities(
    id serial,
    pid int(50),
    rid int(20),
    date varchar(100),
    activity varchar(200),
    outcome varchar(200),
    imgurl varchar(250));

     create table contractors(
         id serial,
         comapany varchar(200),
         address varchar(200),
         email varchar(200),
         phone varchar(50),
         active varchar(50)
     );

     create table cloudimage(
         id serial,
         rid varchar(200),
         pid varchar(200),
         imgurl varchar(250)
     );

     create table weeklycloudimage(
         id serial,
         rid integer,
         pid integer,
         imgurl varchar(250)
     );

     create table weeklyreportactivities(
    id serial,
    pid integer,
    rid integer,
    date varchar(100),
    activity varchar(200),
    outcome varchar(200),
    imgurl varchar(250));


    create table watereval(
        id serial,
        pid integer,
        mid integer,
        mon varchar,
        geo varchar,
           setback varchar,     cdate varchar,    casing varchar,    casedepth varchar,
               casingd varchar,    casingr varchar,    swl varchar,
    yielda varchar,    grout varchar,    pumpd varchar,    pumpt varchar,    watera varchar,
       color varchar,    taste varchar,    odour varchar,
    platformd varchar,   shuttr varchar, stability varchar,    soakpit varchar,    signpost varchar, 
       cordinate varchar,   pumps varchar,    power varchar,
    cable varchar,    earth varchar,    tankpvc varchar,   
     tankc varchar,    tankcap varchar,    stanchion varchar,    antirust varchar,
    reticulated varchar,    island varchar,    fenced varchar,
     visible varchar,    imgurl1 varchar,    imgurl2 varchar,    imgurl3 varchar
    );




    create table sanitationeval(
        id serial,
        pid integer,        
        mid integer, mon varchar,
                setback varchar, structure varchar, cdate varchar,usage varchar,
                restoration varchar,distance varchar,
                area varchar, pitarea varchar,compartment varchar,urinals varchar,
                nourinals varchar,tiled varchar,laterinet varchar,
                tilequality varchar,  tilec varchar,nobasins varchar,washbasins varchar,
                physicallyaid varchar,door varchar,gauge varchar,antirust varchar,
                subs varchar,slabs varchar,pit varchar,crack varchar,crackt varchar,
                defect varchar,sdefect varchar,rendered varchar,sandblast varchar,
                artwork varchar,
                tank varchar,tankembeded varchar,tankcap varchar,tankc varchar,soakpit varchar,
                urinalpit varchar, imgurl1 varchar,
                imgurl2 varchar,imgurl3 varchar,imgurl4 varchar,
                    time timestamp
    )