import {BangerEvent} from '@/events/meme/BangerEvent';
import {IAmDadEvent} from '@/events/meme/IAmDadEvent';
import {KabelbaanNoobEvent} from '@/events/meme/KabelbaanNoobEvent';
import {KarmaDownvoteEvent} from '@/events/karma/KarmaDownvoteEvent';
import {KarmaRemoveDownvoteEvent} from '@/events/karma/KarmaRemoveDownvoteEvent';
import {KarmaRemoveUpvoteEvent} from '@/events/karma/KarmaRemoveUpvoteEvent';
import {KarmaUpvoteEvent} from '@/events/karma/KarmaUpvoteEvent';
import {KarmaMessageCreateEvent} from '@/events/karma/KarmaMessageCreateEvent';
import {UpvoteEvent} from '@/events/UpvoteEvent';
import {ReceiveVoteEvent} from '@/events/poll/ReceiveVoteEvent';
import {MusicQueueButtonEvent} from './music/MusicQueueButtonEvent';

export default [
    BangerEvent,
    IAmDadEvent,
    KabelbaanNoobEvent,
    KarmaDownvoteEvent,
    KarmaRemoveDownvoteEvent,
    KarmaRemoveUpvoteEvent,
    KarmaUpvoteEvent,
    KarmaMessageCreateEvent,
    UpvoteEvent,
    ReceiveVoteEvent,
    MusicQueueButtonEvent,
];