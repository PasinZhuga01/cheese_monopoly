USE cheese_monopoly;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    current_player_id INT,
    login VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    photo TEXT
);

CREATE TABLE IF NOT EXISTS games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    current_player_id INT,
    current_contract_id INT,
    winner_id INT NOT NULL,
    status ENUM('recruiting', 'process', 'completed') NOT NULL,
    process ENUM('dice', 'field', 'decision') NOT NULL
);

CREATE TABLE IF NOT EXISTS contracts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    is_active TINYINT CHECK (is_active IN (0, 1)) NOT NULL,
    initiator_id INT NOT NULL,
    signatory_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    next_player_id INT NOT NULL,
    current_field_id INT NOT NULL,
    game_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS fields (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_id INT,
    type ENUM('asset', 'start', 'jail', 'casino', 'goto_jail') NOT NULL
);

CREATE TABLE IF NOT EXISTS assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    owner_id INT,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    status ENUM('free', 'owned', 'mortgaged'),
    asset_price INT NOT NULL,
    branch_price INT NOT NULL,
    asset_rent_price INT NOT NULL,
    branch_rent_price INT NOT NULL,
    branch_count INT NOT NULL
);

ALTER TABLE users
    ADD FOREIGN KEY (current_player_id) REFERENCES players(id);

ALTER TABLE games
    ADD FOREIGN KEY (current_player_id) REFERENCES players(id),
    ADD FOREIGN KEY (current_contract_id) REFERENCES contracts(id),
    ADD FOREIGN KEY (winner_id) REFERENCES players(id);

ALTER TABLE contracts
    ADD FOREIGN KEY (initiator_id) REFERENCES players(id),
    ADD FOREIGN KEY (signatory_id) REFERENCES players(id);

ALTER TABLE players
    ADD FOREIGN KEY (next_player_id) REFERENCES players(id),
    ADD FOREIGN KEY (current_field_id) REFERENCES fields(id),
    ADD FOREIGN KEY (game_id) REFERENCES games(id);

ALTER TABLE fields
    ADD FOREIGN KEY (asset_id) REFERENCES assets(id);

ALTER TABLE assets
    ADD FOREIGN KEY (owner_id) REFERENCES players(id);