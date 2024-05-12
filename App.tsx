import "./App.css";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import display from "./display";
import Point from "./Point";
import Display2 from "./Display2";
import React, { useEffect } from "react";

import "./App.css";
// Import other dependencies...
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import CanvasWorldView from "./CanvasWorldView";
import GameController from "./GameController";
import HumanPlayer from "./HumanPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import Player from "./Player";
import ActorCollisionHandler from "./ActorCollisionHandlers";
import SnakeCollisionHandler from "./SnakeCollisionHandler";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import Food from "./Food";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const outputElement = document.createElement("div");
    outputElement.id = "output";
    document.body.appendChild(outputElement);
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const snake1 = new Snake("green", new Point(0, 0), "right", 4);
    const snake2 = new Snake("blue", new Point(2, 2), "right", 4);
    const food = new Food(5, 5);

    const collisionHandlers = new ActorCollisionHandler();
    collisionHandlers.addCollisionAction(
      "Snake",
      "Food",
      new SnakeFoodCollisionHandler(),
    );
    collisionHandlers.addCollisionAction(
      "Snake",
      "Snake",
      new SnakeCollisionHandler(),
    );
    const WorldModel1 = new WorldModel(50, 50, collisionHandlers);
    const canvasWorldView = new CanvasWorldView(10);
    WorldModel1.addActors([snake1, snake2]);
    WorldModel1.addViews([canvasWorldView]);
    const SnakeController1 = new SnakeController(WorldModel1, snake1);
    const SnakeController2 = new SnakeController(WorldModel1, snake2);

    const gameController = new GameController(WorldModel1);
    const handler1 = new LRKeyInputHandler();

    // Create player instances
    const WallBumpPlayer1 = new HumanPlayer(SnakeController1, handler1);
    const AvoidWallsPlayer1 = new AvoidWallsPlayer([
      SnakeController1,
      SnakeController2,
    ]);

    // Set players in GameController
    gameController.player1 = WallBumpPlayer1;
    gameController.player2 = AvoidWallsPlayer1;

    console.log("GameController", gameController);
    console.log("Snake1 Direction", snake1.direction);
    console.log("Snake2 direction", snake2.direction);
    console.log("Snake1 Position", snake1.position);
    console.log("Snake2 Position", snake2.position);
    // Run the game
    gameController.run();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Type the following commands in the terminal:</p>
      <pre>
        ➜ /workspace git:(master) ✗ npm install -g typedoc
        <br />➜ /workspace git:(master) ✗ typedoc --out public/docs src/**.
        {"{ts, tsx}"}
      </pre>
      <p>
        Then visit the <a href="robots.txt">documentation</a>. Every time you
        update the doc comments, run the second command in the terminal.
      </p>
    </div>
  );
}
