import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { useGlobalState } from '../../store/GlobalState';
import appState from '../../store/app-state';
import Aux from '../_Aux';


const AddDashboardModal = () => {
  const [dashboardId, setDashboardId] = useState('');
  const [dashboardName, setDashboardName] = useState('');

  const [showAddDashboardModal, dispatch] = useGlobalState(appState, (state) => state.showAddDashboardModal);

  const handleSave = () => {
    const dashboardItem = {
      id:  dashboardId,
      title: dashboardName,
      url: `/dashboard/${dashboardId}`,
    };

    dispatch('addDashboardItem', new Map().set(dashboardId, dashboardItem));
    dispatch('showAddDashboardModal');
  };

  return (
    <Aux>
      <Modal show={showAddDashboardModal} onHide={() => dispatch('showAddDashboardModal')}>
        <Modal.Header closeButton>
          <Modal.Title>Add Dashboard</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Dashboard Identifier</Form.Label>
              <InputGroup>
                <FormControl
                  type="text"
                  name="identifier"
                  placeholder="DASHBOARD_1"
                  aria-label="A dashboard identifier"
                  value={dashboardId}
                  onChange={(e) => setDashboardId(e.target.value)}
                  required
                />
              </InputGroup>
              <Form.Text className="text-muted">
                A dashboard identifier is used to identify your dashboards in the backend.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Dashboard Name</Form.Label>
              <InputGroup>
                <FormControl
                  type="text"
                  name="name"
                  placeholder="Alex's Health Dashboard"
                  aria-label="A dashboard name"
                  value={dashboardName}
                  onChange={(e) => setDashboardName(e.target.value)}
                  required
                />
              </InputGroup>
              <Form.Text className="text-muted">
                A dashboard name is used to describe your dashboard
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch('showAddDashboardModal')}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Aux>
  );
};


export default AddDashboardModal;
