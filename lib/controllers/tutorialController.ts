import * as mongoose from 'mongoose';
import {TutorialSchema} from '../models/tutorialModel';
import {Request, Response} from 'express';

const Tutorial = mongoose.model('Tutorial', TutorialSchema);

export class TutorialController {
    public addNewTutorial (req: Request, res: Response) {
        let newTutorial = new Tutorial(req.body);

        newTutorial.save((err, tutorial) => {
            if (err)  {
                res.send(err);
            }
            res.json(tutorial);
        })

    }
    
    public getTutorials (req: Request, res: Response) {
        Tutorial.find({}, (err, tutorial) => {
            if (err) res.send(err);
            res.json(tutorial);
        })
    }

    public getTutorialWithID (req: Request, res: Response) {
        Tutorial.findById(req.params.tutorialId, (err, tutorial) => {
            if (err) res.send(err);
            res.json(tutorial);
        })
    }

    public updateTutorial (req: Request, res: Response) {
        Tutorial.findOneAndUpdate({
            _id: req.params.tutorialId
        }, req.body, {new: true}, (err, tutorial) => {
            if (err) res.send(err);
            res.json(tutorial);
        })
    }

    public deleteTutorial (req: Request, res: Response) {
        Tutorial.remove({_id: req.params.tutorialId}, (err, tutorial) => {
            if (err) res.send(err);
            res.json({message: 'Successfully deleted Tutorial!'});
        });
    }
}