import {Request, Response} from  'express';
import {ContactController} from '../controllers/crmController';
import {TutorialController} from '../controllers/tutorialController';

export class Routes
{
    public contactController: ContactController = new ContactController();
    public tutorialController: TutorialController = new TutorialController();

    public routes(app): void
    {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message : 'GET request successfully!!!!'
            });
        })

        // contact
        app.route('/contact')
        .get(this.contactController.getContacts)
        .post(this.contactController.addNewContact);

        app.route('/contact/:contactId')
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)

        // tutorial
        app.route('/tutorial')
        .get(this.tutorialController.getTutorials)
        .post(this.tutorialController.addNewTutorial);

        app.route('/tutorial/:tutorialId')
        .get(this.tutorialController.getTutorialWithID)
        .put(this.tutorialController.updateTutorial)
        .delete(this.tutorialController.deleteTutorial)
    }
}