//
//  ViewController.swift
//  HelloWorld
//
//  Created by Artur Kasperek on 16/04/2020.
//  Copyright © 2020 Artur Kasperek. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var mainLabem: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


    @IBAction func buttonClicked(_ sender: Any) {
        mainLabem.text = "Zmienione";
    }
}

