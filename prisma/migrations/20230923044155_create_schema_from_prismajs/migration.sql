-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SuitablePlanets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mass" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Stations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "planetId" TEXT NOT NULL,
    CONSTRAINT "Stations_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "SuitablePlanets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recharge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Recharge_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Stations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recharge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
