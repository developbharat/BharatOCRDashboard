'use client';

import { Button, Card, Col, Flex, Grid, Text, Title } from '@tremor/react';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';

export default function Workspaces() {
  return (
    <main>
      <Flex>
        <div>
          <Title>Workspaces</Title>
          <Text>Welcome to workspaces</Text>
        </div>
        <Button>
          <Link href={Routes.Workspaces.CreateWorkspace()}>New Workspace</Link>
        </Button>
      </Flex>

      <Grid numItemsLg={6} className='gap-6 mt-6'>
        {/* Sidebar */}
        <Col numColSpanLg={2}>
          <Sidebar />
        </Col>

        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className='h-full'>
            <div className='h-60' />
          </Card>
        </Col>
      </Grid>
    </main>
  );
}
