import { PlusIcon, QueueListIcon } from '@heroicons/react/24/outline';
import { Card, Color, Flex, Icon, List, ListItem, Text, Title } from '@tremor/react';
import Link from 'next/link';
import { Routes } from '../../constants/Routes';

type ILinkItem = {
  name: string;
  description: string;
  icon: any;
  color: Color;
  link: string;
};

const workspaceLinks: ILinkItem[] = [
  {
    name: 'All Workspaces',
    icon: QueueListIcon,
    color: 'sky',
    description: 'View all created workspaces',
    link: Routes.Workspaces.MainRoute(),
  },
  {
    name: 'Create Workspace',
    icon: PlusIcon,
    color: 'orange',
    description: 'Create new workspace',
    link: Routes.Workspaces.CreateWorkspace(),
  },
];

interface IAllLink {
  name: string;
  description: string;
  items: ILinkItem[];
}

const allLinks: IAllLink[] = [
  { name: 'Workspaces', description: 'Quick Links related to workspaces', items: workspaceLinks },
];

export default function Sidebar() {
  return (
    <div className='space-y-6'>
      {allLinks.map((it) => (
        <Card key={it.name}>
          <Title>{it.name}</Title>
          <Text>{it.description}</Text>
          <List className='mt-4'>
            {workspaceLinks.map((item) => (
              <ListItem key={item.name}>
                <Link href={item.link}>
                  <Flex justifyContent='start' className='truncate space-x-4'>
                    <Icon variant='light' icon={item.icon} size='md' color={item.color} />
                    <div className='truncate'>
                      <Text className='font-bold'>{item.name}</Text>
                      <Text className='truncate'>{item.description}</Text>
                    </div>
                  </Flex>
                </Link>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </div>
  );
}
