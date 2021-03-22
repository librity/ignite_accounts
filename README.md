# Rocket Seat Ignite - User Account Backend

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Endpoints](#endpoints)
- [Resources](#resources)

## About <a name = "about"></a>

A user account backend made with NodeJS, Express and Jest.

## Getting Started <a name = "getting_started"></a>

### Prerequisites

- `node >= 12.0.0`
- `yarn >= 1.22.0`

### Installing

1. Clone this repo locally and install the required packages:

```bash
$ git clone https://github.com/librity/ignite_accounts.git
$ cd ignite_accounts
$ yarn install
```

2. Start a dev server:

```bash
$ yarn dev
```

3. Import the Insomnia workspace from `./insomnia/workspace.json`
   and run some requests.

### Testing

Run tests with jest:

```bash
$ yarn test
```

## Endpoints <a name = "endpoints"></a>

`Users`

- `GET` http://localhost:3333/users
- `GET` http://localhost:3333/users/:id
- `POST` http://localhost:3333/users
- `PATCH` http://localhost:3333/users/:id/admin

## Resources <a name = "resources"></a>

-
